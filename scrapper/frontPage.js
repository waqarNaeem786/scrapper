const axios = require('axios')
const cheerio = require('cheerio')

const url = "https://www.2embed.ru/library"
let items = []
axios.get(url)
    .then((response) => {
        let $ = cheerio.load(response.data);
    
      $('.film-poster').each((i,e)=>{
        let img = $(e).find("img").attr('data-src')
        let links = $(e).find("a").attr('href').replace(/[^0-9]/g, "")
        let title = $(e).find('img').attr('alt')
        let data = {
          img: `${img}`,
          link: `${links}`,
          title: `${title}`
        }
        items.push(data)
      })
    }).catch(function (e) {
    console.log(e);
});

module.exports = items