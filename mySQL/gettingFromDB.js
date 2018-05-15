// Connect to a database and get values from the table created
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'sample_db',
    user: 'root',
    password: ''
});
/*
// Connect to Database
db.connect( (err) => {
    if(err) throw err;
    console.log(`db Connected Successfully`);
    // Getting data from the database
    // Performing Operation on Database
    db.query("SELECT * FROM customers", (error, result, fields) => {
        if(error) throw error;
        console.log(`These are the table data`);
        console.log(result);
    });
});
*/

// Connect to Database
db.connect( (err) => {
    if(err) throw err;
    console.log(`db Connected Successfully`);
    // Getting name and address data from the database
    // Performing Operation on Database
    db.query("SELECT name, address FROM customers", (error, result, fields) => {
        if(error) throw error;
        console.log(`These are the table data`);
        console.log(result);
        console.log(result[2]);
        console.log(result[2].address);
    });

    // Performing Operation on Database
    db.query("SELECT * FROM customers WHERE address = 'Kiel' ", (error, result, fields) => {
        if(error) throw error;
        console.log(`   `)
        console.log(result);
    });

    // Performing Operation on Database
    let addr = 'Berlin';
    let sql = "SELECT * FROM customers WHERE address = " + mysql.escape(addr);
    db.query(sql, (error, result) => {
        if(error) throw error;
        console.log(`   `)
        console.log(result);
    });


});



