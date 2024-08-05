

const { Create } = require("../../controller/Create")
const db = require("../conectition/conn")

const userModel = {

    Table_Schema: () => {

        let schema_Query = `
        CREATE TABLE IF NOT EXISTS USERS(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            marks INT NOT NULL 
        )`

        db.query(schema_Query, err => {
            if (err) {
                console.log("Error: ", err)

            } else {
                console.log("Table is created")

            }
        })
    },

    // Alter_Table_Schema: () => {

    //     let schema_Query = `
    //     ALTER TABLE users
    //     ADD Marks INT
    //     `
    //     db.query(schema_Query, err => {
    //         if (err) {
    //             console.log("Error: ", err)

    //         } else {
    //             console.log("Table schema updated ")

    //         }
    //     })

    // }
}

module.exports = userModel