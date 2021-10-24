import React from 'react'
import { useEffect, useState } from 'react'




export default function Front() {

    const [data , setData] = useState([])
    useEffect(() => {
        async function fetcher(){
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
               }
        
            let fdata = await fetch("http://localhost:5000/front", { 
                     method: "GET",
                     headers: headersList
                   }) 
            let res = await fdata.json()
            setData(res)
            // let list = 
            // console.log(list)
        }
        fetcher()        
    }, [])
    let movie = data.filter(e => e.id.match(/\Dlibrary\Dmovie\D\d+/g))
    console.log(movie)
    let tv = data.filter(e => e.id.match(/\Dlibrary\Dtv\D\d+/g))
    console.log(tv)
 
    return (
        <div>
            <h1>Movies</h1>
            {movie.map(e=>(
                <div key={e.id.replace(/[^0-9]/g, "")}>
                <img src={e.img} alt="" />
                <h1>{e.title}</h1>   
                </div>
            ))}
            <h1>Tv</h1>
            {tv.map(e=>(
                <div key={e.id.replace(/[^0-9]/g, "")}>
                <img src={e.img} alt="" />
                <h1>{e.title}</h1>   
                </div>
            ))}
        </div>
    )
}
