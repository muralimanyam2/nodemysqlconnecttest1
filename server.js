
const express = require("express");
const bodyParser = require("body-parser");


const dbConnection = require('./connection')

const allroutes = require('./routes/allroutes');
const { all } = require("./routes/allroutes");

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var cors = require('cors')
app.use(cors())
 
app.use(bodyParser.json());

// app.use("/employee", allroutes);  working

app.use("/testapi/", allroutes)

app.get('/',(req,res)=>{
    res.send("hello there");
})


app.listen(3000, '0.0.0.0', ()=>{ // we can remove '0.0.0.0'
    console.log("app listening")
})