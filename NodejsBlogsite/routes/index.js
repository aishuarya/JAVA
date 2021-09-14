const express=require('express')
const Article=require('./../models/articles')
const router=express.Router();

router.get('/',async (req,res)=>{

    const articles=await Article.find().sort({
        date:'desc'
    })   
        res.render('articles/index',{ articles :articles})
    })

module.exports=router;