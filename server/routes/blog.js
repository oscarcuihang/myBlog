//博客信息页
var express = require('express');
var router = express.Router();
var dbHandle = require('../dbbase/dbHandle');
var articles = dbHandle.getModel('article');

//请求所有文章
router.get('/',(req,res,next)=>{
    articles.find({},(err,resData)=>{
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
//请求单个文章
router.get('/:id',(req,res,next)=>{
    articles.findOne({_id:req.params.id},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取文章成功',
                'data':resData
            })
        }
    })
})
//添加文章
router.post('/',(req,res,next)=>{
    if(!req.body.title || !req.body.text) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    let article = {
        title : req.body.title,
        text : req.body.text
    }
    let newArticle = new articles(article);
    newArticle.save();
    res.json({
        'status':1,
        'message':'保存成功'
    });
})

module.exports = router;