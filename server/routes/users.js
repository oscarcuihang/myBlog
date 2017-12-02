var express = require('express');
var router = express.Router();
var dbHandle = require('../dbbase/dbHandle');
var users = dbHandle.getModel('user');
const fs = require('fs');
const path = require('path');
var formidable = require('formidable');

//登录
router.post('/',(req,res,next)=>{
  let userName = req.body.userName;
  let password = req.body.password;
  // console.log(users);
  let query = {name:userName,password:password};
      users.count(query,(err,resData)=>{
          if(err){
              res.json({
                  'status':0,
                  'message':'登录失败'
              })
          }else{
              if(resData == 1){
                  res.json({
                      'status':1,
                      'message':'登录成功'
                  })
              }else{
                  res.json({
                      'status':0,
                      'message':'用户名或密码错误'
                  })
              }
          }
      })
})

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

//修改个人信息
router.post('/edit',(req,res,next)=>{
    let name =  req.fields.name;
    let password = req.fields.password;
    let avatar = '/be/img/'+req.files.avatar.path.split(path.sep).pop();
    let introduce = req.fields.introduce;
    // console.log(111);
    users.findOne({name:name}).update({
        "name":name,
        "password":password,
        "avatar":avatar,
        "introduce":introduce
    },(err)=>{
      if(err){
          res.json({
              'status':0,
              'message':'更新失败',
              "data": err
          });
      }else{
          res.json({
              'status':1,
              'message':'更新成功'
          });
      }
    })
})

module.exports = router;