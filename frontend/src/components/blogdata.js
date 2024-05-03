import React, { useEffect, useState } from 'react'

function blogdata(blogs) {
    const [data,setData]=useState([])

  useEffect(()=>{
    fetch('https://myblog-ew7e.onrender.com/blogs',{
        method:'GET',
        headers:{
              "Content-Type":"application/json",
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
      setData(res)})
  },[data])
  return data
}

export default blogdata
