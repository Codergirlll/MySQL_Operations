
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { Table_Schema, Alter_Table_Schema } = require("./db/models/user.model")

require("dotenv").config()
require("../src/db/conectition/conn")


// ******** for passing the body both methods are valid  ***********
app.use(bodyParser.json())
// app.use(express.json())

// *****************************************************************
Table_Schema()
// Alter_Table_Schema()
app.use("/", require("./router/route"))

let port = process.env.PORT || 30
app.listen(port, () => {
    console.log(`Server is running at port no: ${port}`)
})
