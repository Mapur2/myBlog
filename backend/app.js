const express = require('express');

const app=express()
const blogs = require('./routes/blogs')
app.use(express.json())
const cors = require('cors');
app.use(cors({
    origin:"*",
    methods:"*"
}))

app.use('/blogs',blogs)

app.listen(5000)
