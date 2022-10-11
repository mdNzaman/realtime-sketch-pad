const mysql = require("mysql");
require("dotenv").config();

const dbCon = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.ROOT, 
    password: process.env.PASSWORD,
    database: process.env.DATABASE 
})

dbCon.connect((err)=>{
    if(err) console.log(err);
    else console.log("Database connected successfully!!..");
})

module.exports = dbCon;