var express = require('express');
var router = express.Router();
var fs=require('fs')
var user=[];
router.get('/sinin',function(req,res){
    res.render('in',{error:req.session.error,success:req.session.success});
});
router.post('/sinin',function(req,res){
    var use=req.body;
    fs.readFile('./user.json','utf8',function(err,data){
        if(err) return 'ok';
        //if(data.length===0){
        //    data=[]
        //}
        data=JSON.parse(data);
        var cur=data.find(function(item){
            return item.username==use.username
        });
        if(cur){
            req.session.error='已被占用';
            res.redirect('/user/sinin')
        }else{
            req.session.success='成功';
            data.push(use)
            fs.writeFile('./user.json',JSON.stringify(data),function(){
                res.redirect('/user/signup')
            });
        }
    });
});
router.get('/signup',function(req,res){
    res.render('up',{error:req.session.error,success:req.session.success});
});
router.post('/signup',function(req,res){
    var use=req.body;
    fs.readFile('./user.json','utf8',function(err,data){
        if(err) return 'ok';
        data=JSON.parse(data);
        var cur=data.find(function(item){
            return item.username==use.username
        });
        if(cur){
            req.session.error='已被占用';
            res.redirect('/user/signup')
        }else{
            req.session.success='成功';
            data.push(use)
            fs.writeFile('./user.json',JSON.stringify(data),function(){
                res.redirect('/user/welcome')
            });
        }
    });
});
//欢迎页
router.get('/welcome',function(req,res){
    res.render('welcome');
});
module.exports = router;
