// Connect to a database and create a table
const mysql = require('mysql');
const db = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'sample_db',
        user: 'root',
        password: ''
});
// Connect to Database
db.connect( (err) => {

    if(err) throw err;
    console.log(`db Connected Successfully`);

    // Creating table named customer
    const sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY," +
        "name VARCHAR(255), " +
        "address VARCHAR(255), " +
        "phone_no VARCHAR(255)" +
        ")";

    // Performing Operation on Database
    db.query(sql, (error, result) => {
        if(error) throw error;
            console.log(`Table created`);
    });
});

/*
// Connect to a database and alter/edit the table by adding a new column
const mysql = require('mysql');
const db = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'sample_db',
        user: 'root',
        password: ''
});
// Connect to Database
db.connect( (err) => {

    if(err) throw err;
    console.log(`db Connected Successfully`);

    // Editing a table named customer
    const sql = "ALTER TABLE customers ADD COLUMN sex VARCHAR(255)";

    // Performing Operation on Database
    db.query(sql, (error, result) => {
        if(error) throw error;
            console.log(`Table altered`);
    });
});
*/

