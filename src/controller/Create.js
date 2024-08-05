
const db = require("../db/conectition/conn");
const { Table_Schema } = require("../db/models/user.model")

exports.Create = (req, res) => {

    // console.log("Table_Schema: ", Table_Schema)
    console.log("Himani: ", req.body)
    const { name, email } = req.body;

    const sql = `
    INSERT INTO 
    users (name, email)
    VALUES (?,?)
    `;

    db.query(sql, [name, email], (err, result) => {
        if (err) res.send({ message: err.message });;
        res.send({ id: result.insertId, name, email, result });
    });
}


