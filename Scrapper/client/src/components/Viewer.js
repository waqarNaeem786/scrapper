import React from 'react'
import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
export default function Viewer() {


    const {id} = useParams()

    let ac =decodeURIComponent(id)
    let acid = ac.replace(/[^0-9]/g, "")

    console.log(acid)

    //Hooks
     const [desc, setdesc] = useState()
    useEffect(() => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
           }
           
           fetch(`http://localhost:5000/description`, { 
             method: "POST",
             body: JSON.stringify({
                src: ac
                 
              }),
             headers: headersList
           }).then(function(response) {
             return response.json();
           }).then(function(data) {
            //    console.log(data)
            setdesc(data)
        })
    }, [])

    console.log(desc)


    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{decodeURIComponent(id)}</h1>
            {/* <iframe title="it is a title" id="iframe" src={`https://www.2embed.ru/embed/tmdb/movie?id=${acid}`} width="50%" height="100%" frameborder="0"></iframe> */}

            <img src={desc !== undefined ? desc.image : ""} alt="" />
            <h3>{desc !== undefined ? desc.title : ""}</h3>
            <h4>{desc !== undefined ? desc.description : ""}</h4>

        </div>
    )
}
