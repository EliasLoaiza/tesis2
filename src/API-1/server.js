const express = require("express")
const mysql = require("mysql")
const myconn = require("express-myconnection")
const cors = require("cors")
const bodyParser = require('body-parser')

const routes = require("./routes")

const app = express()
app.set("port", process.env.PORT || 9000)
const dbOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "tesis"
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, "single"))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes -------------------------------------------
app.get("/", (req, res)=>{
    res.send("Welcome to my API")
})
// app.use("/api", routes)
// app.use("/")
routes(app)

// server running -----------------------------------
app.listen(app.get("port"), ()=>{
    console.log("server running on port", app.get("port"))
})