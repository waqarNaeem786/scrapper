const axios = require('axios'),
cheerio = require('cheerio')

let data = {title:"",
description:"",
image:"",
season: [],
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
     
     data.season.push(se)
     let ep = $('.episode-item').text().replace(/\s/g, '')
     
      //finding appropriate position of episode to extract 
      //the data between two positions of episode
     var regex = /Episode1:/gi, result, indices = [];
     while ( (result = regex.exec(ep)) ) {
         indices.push(result.index);
         // console.log(indices)    
     }
          
      let arr = []
      for(let i = 0; i < indices.length; i++){
          // console.log(indices[i],indices[i+1])
        arr.push(ep.slice(indices[i],indices[i+1])) 
      }

     //assigning ep to object
     data.episode = arr
   
    //replace(/\s/g, '')
      console.log(data)
    }).catch(function (e) {
    console.log(e);
});

}

viewer("/library/tv/75219")
module.exports = {
    viewer,
    data
}
