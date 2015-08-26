var express=require('express');
var bodyParser=require('body-parser')
var app=express();

app.use(bodyParser.urlencoded({
	extended:true
}));

//creating a middleware

function authUser(req,res,next){

    var user={
      name:'XYZ',
      admin:true
    };

    req.user=user;
    next();
}

app.get('/',function(req,res){
console.log(req.user);
res.send({

"foo":"bar"
});

});

app.post('/doStuff',authUser,function(req,res){

    var param=req.param('foo');

    res.send({
    	foo:param,
    	isAdm:req.user.admin
    })

});

app.listen(3000);
console.log("Listening on this port " + 3000);
