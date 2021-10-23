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
        }
        fetcher()        
    }, [])
  console.log(data)

    return (
        <div>
            <h1>Front</h1>
            {data.map(e=>(
                <div>
                <h1>{e.title}</h1>
            
                </div>

            ))}
        </div>
    )
}
