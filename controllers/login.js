const express = require("express");
const Router = express.Router();
const jwt = require('jsonwebtoken');
const sqlConnection = require('../connection')
const http = require('http');

exports.getLogin = async(req,res)=>{
    sqlConnection.query("select * from signup where name = '" + req.body.name + "' AND pswd = '" + req.body.pswd + "'", (err, rows, fields)=>{
        if(!err){
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
                time: Date(),
                userId: rows[0]?.signupId,
            }
            const token = jwt.sign(data, jwtSecretKey);
            rows[0]['token'] = token
            res.send(rows)
        }else{
            console.log(err)
        }
    })
}

exports.trailId = async(req, res)=>{
            var header = req.headers.Authorization;   
            var decoded = jwt_decode(header);
            res.send(header)
}