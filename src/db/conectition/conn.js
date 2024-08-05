


const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    user: "root",
    password: "Himgan@1611",
    database: "SQL_CRUD"
});

db.connect((err) => {
    if (err) {
        console.log("Error: ", err.message);
        return;
    }
    console.log("Database connected successfully");
});

module.exports = db