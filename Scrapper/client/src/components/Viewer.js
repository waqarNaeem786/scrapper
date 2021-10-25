import React from 'react'
import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
export default function Viewer() {
    const {id} = useParams()
    let ac =decodeURIComponent(id)
    let acid = ac.replace(/[^0-9]/g, "")
    console.log(acid)
    
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{decodeURIComponent(id)}</h1>
            <iframe  id="iframe" src={`https://www.2embed.ru/embed/tmdb/movie?id=${acid}`} width="50%" height="100%" frameborder="0"></iframe>
        </div>
    )
}
