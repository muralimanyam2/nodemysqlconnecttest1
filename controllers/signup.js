const express = require("express");
const Router = express.Router();

const sqlConnection = require('../connection')

exports.postsignupData = async(req,res)=>{
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
                    res.send(err)
                }
            })
}