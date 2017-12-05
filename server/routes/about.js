//个人信息修改
var express = require('express');
var router = express.Router();
var marked = require('marked');
var dbHandle = require('../dbbase/dbHandle');
var about = dbHandle.getModel('about');
var markdown = require('markdown').markdown;
var moment = require('moment');


//请求个人信息
router.get('/',(req,res,next)=>{
    about.find({},(err,resData)=>{
        resData[0].bio = markdown.toHTML(resData[0].bio);
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData[0]
            })
        }
    })
})
//请求markdown
router.get('/markdown',(req,res,next)=>{
    about.find({},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData[0]
            })
        }
    })
})


//修改简介
router.post('/',(req,res,next)=>{
    let bio = req.body.bio;
    about.findOne({}).update({
        bio: bio
    },(err)=>{
        if(err){
            res.json({
                'status':0,
                'message':'更新失败',
                'err': err
            }) 
        }else{
            res.json({
                'status':1,
                'message':'更新成功'
            })
        }
    })
})

module.exports = router;