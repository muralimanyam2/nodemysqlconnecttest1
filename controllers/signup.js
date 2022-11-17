const express = require("express");
const Router = express.Router();

const sqlConnection = require('../connection')

exports.getsignupData = async(req,res) => {
    res.send("hi man")
}

exports.postsignupData = async(req,res)=>{
//   return res.send("hi")
console.log(req)
    var query= `INSERT into signup (name,pswd,dob) VALUE (?,?,?)`;
    var values = [
        req.body.name,
        req.body.pswd,
        req.body.dob
    ];

    sqlConnection.query(query,values, (err, rows, fields)=>{
                if(!err){
                    res.json("post data success")
                }else{
                    console.log(err)
                    res.send("failed")
                }
            })
}