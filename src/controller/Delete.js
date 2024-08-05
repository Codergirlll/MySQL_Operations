
const db = require("../db/conectition/conn");
const { Table_Schema } = require("../db/models/user.model")

exports.DeleteById = (req, res) => {

    // console.log("Table_Schema: ", Table_Schema)
    console.log("Himani: ", req.body)
    const { id } = req.body;

    const sql = `
    DELETE FROM USERS
    WHERE id=?
    `;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err.message)
            res.send({ message: err.message });
        }
        res.send({ result });
    });
}


