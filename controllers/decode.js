
const jwt_decode = require('jwt-decode');
const sqlConnection = require('../connection')
const http = require('http');

const express = require("express");
const Router = express.Router();


exports.decodeByReq = function(req){
    var header = req.headers.authorization;   
    var authorizationtoken = header?.slice(7);
    var decoded = jwt_decode(authorizationtoken);
    return decoded;
   // decoded.userId// this is the id
}