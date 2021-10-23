const cheerio = require('cheerio')
const axios = require('axios')


let searchItems = []
function search (name){
    let url  = `https://www.2embed.ru/library/search?keyword=${name}`
    axios.get(url)
    .then((response) => {
        let $ = cheerio.load(response.data);
    
      $('.film-poster').each((i,e)=>{
        let img = $(e).find("img").attr('data-src')
        let links = $(e).find("a").attr('href')
        //.replace(/[^0-9]/g, "")
        let title = $(e).find('img').attr('alt')
        let data = {
            title: `${title}`,
            link: `${links}`,
            img: `${img}`
          }
          searchItems.push(data)

      })
    }).catch(function (e) {
    console.log(e);
});

}

module.exports = {
    searchItems,
    search

}