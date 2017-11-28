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

})

//登录
router.post('/',(req,res,next)=>{
    var userName = req.body.userName;
    var password = req.body.password;
    // console.log(users);
    var query = {name:userName,password:password};
        users.count(query,(err,resData)=>{
            if(err){
                if(!req.body.userName || !req.body.password){
                    res.json({
                        'status':0,
                        'message':'用户名或密码不能为空'
                    })
                }else{
                    res.json({
                        'status':0,
                        'message':'登录失败'
                    })
                }
            }else{
                if(resData == 1){
                    res.json({
                        'status':1,
                        'message':'登录成功'
                    })
                }else{
                    res.json({
                        'status':0,
                        'message':'用户名或密码错误',
                    })
                }
            }
        })
})

module.exports = router;