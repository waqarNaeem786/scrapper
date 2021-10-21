const express = require('express')
const firstpage = require('../scrapper/frontPage')
const first = express.Router()

first.route('/').all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    next();
}).get((req,res)=>{
    res.send(firstpage)
})

module.exports = first