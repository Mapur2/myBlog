import React from 'react'

import BlogCards from './BlogCards'
import blogdata from './blogdata'
export default function Content() {
    const data=blogdata()
    
  return (
    <div id='content'>
      {data.map(data=><BlogCards txt={data.text}  head={data.head} cap={data.cap} pic={data.pic} id={data.id}/>)}
    </div>
  )
}
