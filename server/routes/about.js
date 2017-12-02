//个人信息修改
var express = require('express');
var router = express.Router();
var marked = require('marked');
var dbHandle = require('../dbbase/dbHandle');
var users = dbHandle.getModel('user');
var markdown = require('markdown').markdown;
var moment = require('moment');

//请求个人信息
router.get('/',(req,res,next)=>{
    users.find({},(err,resData)=>{
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


module.exports = router;