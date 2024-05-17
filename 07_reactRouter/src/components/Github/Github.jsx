import React, { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()
    // const [data,setData]=useState([])

    //we want to fetch an api so that wen can get github followers , api call tb krna chahte h jab ek component load ho
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-centre m-4 bg-gray-600 text-white text-3xl'>
             Github followers:{data.followers}
             <img src={data.avatar_url} alt="Git pic" width={300}/>
             </div>
    )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json( )
}
