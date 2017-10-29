//评论
var express = require('express');
var router = express.Router();
var dbHandle = require('../dbbase/dbHandle');
var comments = dbHandle.getModel('comment');
//var marked = require('marked');
//var markdown = require('markdown').markdown;

//请求所有评论
router.get('/:id',(req,res,next)=>{
    comments.find({articleId: req.params.id},(err,resData)=>{
        //将markdown转化为HTML
        // resData.forEach((doc)=>{
        //     doc.text = markdown.toHTML(doc.text);
        // })
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData
            })
        }
        
    })
})
//添加评论
router.post('/:id',(req,res,next)=>{
    if(!req.body.author || !req.body.text|| !req.body.articleId){
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    } 

    let comment = {
        articleId : req.body.articleId,
        author: req.body.author,
        text: req.body.text
    };

    let newComment = new comments(comment);
    newComment.save();
    res.json({
        'status':1,
        'message':'提交成功',
    })
})

module.exports = router;