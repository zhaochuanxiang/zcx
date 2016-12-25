
var express=require('express')
var app=express()
var session = require('express-session');
var bodyC=require('body-parser')
var cookieP=require('cookie-parser')
var path=require('path');
var route=require('./route/toute')
app.set('view engine','html')
app.set('views',path.resolve('user'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.resolve('public')));
app.use(bodyC.urlencoded({extended:true}));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}));
app.use('/user',route)
app.listen(8000);