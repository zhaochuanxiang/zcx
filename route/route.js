/**
 *
 *
 * Created by Administrator on 2016/12/25.
 */
    var express=require('express')
var app=express();
var user=express.Route();
var use=[]
user.get('/siginin',function(req,res){
    res.render('siginin',{title:'用户注册'})
})
user.post('siginin',function(req,res){
    var user=req.body
    res.redirect('/user/siginup')
})
user.get('siginup',function(req,res){
    res.redirect('siginup')
})
user.post('siginup',function(req,res){
    user.find(function(item){
        return
    })
})
//注册的时候要判断用户名是否重复  出错了告诉客户端出错的原有  把数据保存在文件系统中
