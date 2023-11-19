const { stringify } = require('querystring')
const data=require('../db/dataFile')
const {writeFileSync}=require('fs')
const getBlogs=(req,res)=>{
    res.status(200).json(data)
}

const insertBlog=(req,res)=>{
    res.send("created")
    
    const blog=req.body
    console.log(blog)
    data.push({...blog,id:data[data.length-1].id+1})
    let s=""
    for (let index = 0; index < data.length; index++) {
        s=s+`{pic:"${data[index].pic}",head:"${data[index].head}",text:"${data[index].text}",cap:"${data[index].cap}",id:${data[index].id}},\n`
    }
    writeFileSync("./db/dataFile.js",`let data=[${s}] \n module.exports=data`)
   // console.log(s)
}

module.exports={getBlogs,insertBlog}