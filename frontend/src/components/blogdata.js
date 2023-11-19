import React, { useEffect, useState } from 'react'

function blogdata(blogs) {
    const [data,setData]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/blogs',{
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
