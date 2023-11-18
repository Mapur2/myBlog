const express = require('express');
const app=express.Router()
const {getBlogs}=require('../controllers/data')

app.route('/').get(getBlogs)

module.exports=app