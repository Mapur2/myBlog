const data=require('../db/dataFile')

const getBlogs=(req,res)=>{
    res.status(200).json(data)
}

module.exports={getBlogs}