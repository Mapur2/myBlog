const express = require('express');

const app=express()
const blogs = require('./routes/blogs')

const cors = require('cors');
app.use(cors({
    origin:"*",
    methods:"*"
}))

app.use('/blogs',blogs)

app.listen(5000)
