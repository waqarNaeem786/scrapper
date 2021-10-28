const axios = require('axios'),
cheerio = require('cheerio')

let data = {title:"",
description:"",
image:"",
season: "",
episode: ""
}
const viewer = (link)=>{
  // console.log(link)
    let url = `https://www.2embed.ru${link}`
    axios.get(url)
    .then((response) => {
        let $ = cheerio.load(response.data);
    
      $('.detail-top').each((i,e)=>{
        const img = $(e).find("img").attr('src')
        const title = $(e).find(".heading-large").text()
        const desc = $(e).find(".description").text()
        data.image = img
        data.title = title
        data.description = desc
      })

     let se = $('.season-item').text()
     data.season = se
     let ep = $('.episode-item').text()
     let episode = []
     episode.push(ep)
     data.episode = episode
     
    //  .replace(/\s/g, '')

      //replace(/\s/g, '')
      console.log(data)
    }).catch(function (e) {
    console.log(e);
});

}

// viewer("/library/tv/75219")
module.exports = {
    viewer,
    data
}
