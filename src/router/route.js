
const express = require("express")
const Router = express.Router()

const { Create } = require("../controller/Create")
const { GetAll } = require("../controller/GetAll")
const { DeleteById } = require("../controller/Delete")
const { Update } = require("../controller/update")

Router.post("/create", Create)
Router.get("/getall", GetAll)
Router.delete("/delete/by/id", DeleteById)
Router.post("/update", Update)

module.exports = Router