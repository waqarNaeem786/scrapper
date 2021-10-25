import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'




export default function Front() {

    const [data , setData] = useState([])
    const [tvs , setTv] = useState(false)
    const [movies , setMovies] = useState(true)


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
    // console.log(movie)
    let tv = data.filter(e => e.id.match(/\Dlibrary\Dtv\D\d+/g))
    // console.log(tv)

 function tfunc (){
    if(!movies === false){
        setMovies(false)
    }
   setTv(true)
    
    
 }
 function mfunc (){
    if(!tvs === false){
        setTv(false)
    }
        setMovies(true) 
     
}
    return (
        <div className="main">
            <div className="btnsmv">
                <div className="btns">
                 <button onClick={mfunc}>Movie</button>
                    <button onClick={tfunc}>TV</button>
                </div>

                    <h3>Latest Movies and Shows</h3>
            </div>
         
            
        <div className="mandt">
                {movies === true?movie.map(e=>( 
                    <div className="movie" key={e.id.replace(/[^0-9]/g, "")}>
                        <Link to={`/viewer/${encodeURIComponent(e.id)}`}>
                        <img className="core" src={e.img} alt="" />
                        <div className="btnonimg">
                                <img className="onhbtn" src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png" alt=""/> 
                            <h3>{e.title}</h3>
                        </div>
                        </Link>
                     
                               
                    </div>
                )): ""}


                {tvs === true ? tv.map(e=>(
                    <div className="movie" key={e.id.replace(/[^0-9]/g, "")}>
                     <Link to={`/viewer/${encodeURIComponent(e.id)}`}>
                     <img className="core" src={e.img} alt="" />
                        <div className="btnonimg">
                                <img className="onhbtn" src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png" alt=""/> 
                               <h3>{e.title}</h3>
                        </div>
                     </Link>
                     
                    </div>
                )): ""}
        </div>

            
        </div>
    )
}
