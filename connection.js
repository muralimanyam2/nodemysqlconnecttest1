const mysql = require("mysql");

var dbConnection = mysql.createConnection({
    host:"localhost",
    database:"mytestdatabase",
    user:"root",
    password:"1234",
    multipleStatements:true
})

dbConnection.connect((err)=>{
    if(!err){
        console.log("connected")
    }else{
        console.log(err)
        console.log("connection failed")
    }
})

module.exports = dbConnection;