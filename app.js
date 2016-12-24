var express = require('express');
var fs=require('fs');
var app = express();
var path=require('path');
var bodyParser = require('body-parser'),
    users = [];
//console.log(bodyParser)
app.set('view engine','ejs');
app.set('views',path.resolve('public'));
//注册
app.get('/signup',function(req,res){
    res.render(path.resolve('./public/siginin.ejs'))
});
app.use(bodyParser.urlencoded({extended:true}));
app.post('/signup',function(req,res){
    users.push(req.body);
    res.redirect('/siginup');
});
//登录
app.get('/siginup',function(req,res){
    res.render(path.resolve('./public/siginup.ejs'))
});
app.post('/siginupp',function(req,res){
    var flag = users.find(function(item){
        return item.username == req.body.username && item.password == req.body.password;
    })
    if(flag){
        res.redirect('/welcome');
    }else{
        res.redirect('/siginup');
    }
});
app.get('/welcome',function(req,res){
    res.sendFile(path.resolve('./public/welcome.html'))
})
//欢迎页
app.get('/welcome');
app.listen(8080);