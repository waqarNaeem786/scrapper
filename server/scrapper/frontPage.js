const axios = require('axios')
const cheerio = require('cheerio');
const { val } = require('cheerio/lib/api/attributes');

const url = "https://www.2embed.ru/library"
let allitems = []

//front page
axios.get(url)
    .then((response) => {
        let $ = cheerio.load(response.data);
    
      $('.film-poster').each((i,e)=>{
        let img = $(e).find("img").attr('data-src')
        let links = $(e).find("a").attr('href')
        
        let title = $(e).find('img').attr('alt')
      
        

        let id = {
          id: `${links}`, 
          title: `${title}`,
          img: `${img}`
        }
       
        allitems.push(id)
        // console.log(allitems)
        
      })
    }).catch(function (e) {
    console.log(e);
});



module.exports = allitems