const express = require("express");
const Router = express.Router();

const sqlConnection = require('../connection')

exports.getall = async(req,res)=>{
    sqlConnection.query("select * from employee", (err, rows, fields)=>{
                if(!err){
                    res.send(rows)
                }else{
                    console.log(err)
                }
            })
}