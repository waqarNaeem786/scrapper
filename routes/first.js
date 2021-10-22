const { next } = require('cheerio/lib/api/traversing')
const express = require('express')
const firstpage = require('../scrapper/frontPage')
const { viewer, data } = require('../scrapper/videoPage')


const first = express.Router()
const desc = express.Router()

//front page Router
first.route('/').all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    next();
}).get((req,res)=>{
    res.send(firstpage)
})


//Description of movie/serial
desc.route('/').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    next();
}).post((req,res)=>{
    viewer(req.body.link)
    res.send(data)


})

module.exports = {
    first,
    desc
}