const express = require("express");
const Router = express.Router();

const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const sqlConnection = require('../connection')
const http = require('http');

var decodeFile = require('./decode')   //decodeByReq

exports.getLogin = async(req,res)=>{
//    var id = decodeFile.decodeByReq(req);
//    if(id){}
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
            // var header = req.headers.authorization;   
            // var authorizationtoken = header?.slice(7);
            // var decoded = jwt_decode(authorizationtoken);
            // res.send(decoded)
            // decoded.userId// this is the id
}