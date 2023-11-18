import React from 'react'

import { useParams } from 'react-router-dom'
import blogdata from './blogdata'
function Blogs() {
  
  const params = useParams()
  const { id } = params
  const dataObjects=blogdata(id)
  const blog = dataObjects.find(data => id == data.id)
  console.log(blog,"hi")
  return (
    <>
    <div className='blog'>
      <img src={blog!=undefined? blog.pic: ""} alt="" />
      <div>
        <h1>{blog!=undefined? blog.head: ""}</h1>
        <p>{blog!=undefined? blog.text: ""}</p>
      </div>
    </div>
    </>
  )
}

export default Blogs
