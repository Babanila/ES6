// Connect to a database and insert values into the table created
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

    // Editing a table named customer using any of the statements below
    //const sql = "ALTER TABLE customers ADD COLUMN sex VARCHAR(255)";
    // insertion of single row
    //let sql = "INSERT INTO customers (name, address, phone_no) VALUES ('Otto GmbH', 'Hamburg', 01806303030)";

    // insertion of Multiple row
    sql = "INSERT INTO customers (name, address, phone_no) VALUES ?";
      let values = [
          ['AOK GmbH', 'Berlin', '08002655000'],
          ['BlueCat GmbH', 'Frankfurt', '08177968370'],
          ['CommerceTools GmbH', 'Munich', '08999829960'],
          ['KPMG GmbH', 'Kiel', '080055555522']
    ];
    // Performing Operation on Database
    db.query(sql, [values], (error, result) => {
        if(error) throw error;
        console.log(`${result.affectedRows} record inserted`);
    });
});
