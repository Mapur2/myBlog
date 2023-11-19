const express = require('express');
const app=express.Router()
const {getBlogs, insertBlog}=require('../controllers/data')

app.route('/').get(getBlogs)
app.route('/posts').post(insertBlog)
module.exports=app