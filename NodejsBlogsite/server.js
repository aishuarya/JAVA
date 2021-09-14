const express=require('express')
const mongoose =require('mongoose')
const methodOverride=require('method-override')
const app=express()
const articleRouter=require('./routes/articles.js')
const indexRouter=require('./routes/index.js')

mongoose.connect('mongodb://localhost/blogs')


app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use('/articles',articleRouter)
app.use('/',indexRouter)
app.listen(5000);