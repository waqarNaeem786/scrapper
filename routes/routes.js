const { next } = require('cheerio/lib/api/traversing')
const express = require('express')
const firstpage = require('../scrapper/frontPage')
const { viewer, data } = require('../scrapper/videoPage')
const { search, searchItems } = require('../scrapper/search')


//declaration
const first = express.Router()
const desc = express.Router()
const searchRoute = express.Router()
//front page Router
first.route('/').all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    next();
}).get((req,res)=>{
    res.send(firstpage)
})


//Description of movie/serial
desc.route('/:lib/:movie/:id')
.get(async (req,res)=>{
    viewer("/"+req.params.lib+"/"+req.params.movie+"/"+req.params.id)
    res.json(data)
})

//search Route
searchRoute.route('/:name')
.get((req,res)=>{
    // console.log(req.params.name)
    search(req.params.name)
    res.send(searchItems)
})


module.exports = {
    first,
    desc,
    searchRoute
}