const express = require("express");
const Router = express.Router();

const sqlConnection = require('../connection')

const employeeController = require("../controllers/employee")
const signupController = require("../controllers/signup")

// Router.get("/",(req, res)=>{   working
//     sqlConnection.query("select * from employee", (err, rows, fields)=>{
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// })

Router.get("/employee", employeeController.getall)

Router.post("/signup", signupController.postsignupData)
Router.get("/getsignup",signupController.getsignupData)

module.exports = Router;