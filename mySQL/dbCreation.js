// Database creation
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
});

db.connect( (err) => {
    if(err != null) {
        console.log(err);
    }else
        console.log(`db Connected Successfully`);
    // Creating Database named sample_db
    db.query('CREATE DATABASE sample_db', (error, result) => {
        if(error) {
            console.log(error);
        }else
            console.log(`sample_db database created`);
    });
});
