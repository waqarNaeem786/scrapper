const axios = require('axios'),
cheerio = require('cheerio')

let data = {title:"",
description:"",
image:""
}
const viewer = (link)=>{
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
    }).catch(function (e) {
    console.log(e);
});

}



module.exports = {
    viewer,
    data
}
