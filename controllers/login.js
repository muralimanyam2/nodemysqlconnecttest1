const express = require("express");
const Router = express.Router();

const sqlConnection = require('../connection')

exports.getLogin = async(req,res)=>{
    sqlConnection.query("select * from signup where (name,pswd) VALUE (?,?)", (err, rows, fields)=>{
                if(!err){
                    res.send(rows)
                }else{
                    console.log(err)
                }
            })
}