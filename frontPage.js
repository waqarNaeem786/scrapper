const axios = require('axios')
const cheerio = require('cheerio')

const url = "https://www.2embed.ru/library"
let items = {links:"",
img:""} 
axios.get(url)
    .then((response) => {
        let $ = cheerio.load(response.data);
    
      $('.film-poster').each((i,e)=>{
        let img = $(e).find("img").attr('data-src')
        let links = $(e).find("a").attr('href')
        items.img = img
        items.links = links
        console.log(JSON.stringify(items))

      })
    }).catch(function (e) {
    console.log(e);
});

module.exports = items