//博客信息页
var express = require('express');
var router = express.Router();
var marked = require('marked');
var dbHandle = require('../dbbase/dbHandle');
var articles = dbHandle.getModel('article');
var markdown = require('markdown').markdown;

//请求所有文章
router.get('/',(req,res,next)=>{
    articles.find({},(err,resData)=>{
        //将文章由markdown转化为html
        resData.forEach((doc)=>{
            doc.text = markdown.toHTML(doc.text);
        })
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功111',
                'data':resData
            })
        }
    })
})
//请求单个文章
router.get('/:id',(req,res,next)=>{
    articles.findOne({_id:req.params.id},(err,resData)=>{
        resData.text = markdown.toHTML(resData.text);
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取文章成功111',
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
        'message':'保存成功zzz'
    });
})

//删除文章
router.post('/remove',(req,res,next)=>{
    console.log(req.body.id);
    var id = req.body.id;
    articles.remove({_id:id},(err)=>{
        console.log(err);
        if(err){
            res.json({
                'status':0,
                'message':'删除失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'删除成功'
            });
        }
    })
})

module.exports = router;