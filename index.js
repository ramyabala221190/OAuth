const express=require('express');
const envconfig=require('./config');
const cors=require('cors');
const axios=require('axios');
const http=require('https');
const app=express();

//Implementing using Node and Angular

const corsOptions={
origin: 'http://localhost:4200',
methods:['GET','POST','PUT','DELETE','OPTIONS'],
}

app.use(cors(corsOptions));

//Sending url and client id details to client since calling the url from node isnt working due to CORS errors.
//Otherwise you could call the github authorize url from here itself
app.get('/userAuthentication',function(req,res)
{
console.log("request received");
res.send({redirect_url:'https://github.com/login/oauth/authorize?client_id='+envconfig.CLIENT_ID+'&redirect_uri='+envconfig.REDIRECT_URI});
})

app.get('/OAuthTest1992Redirect',function(req,res)
{
/*We are redirected here after successful user sign in from git hub.
Git hub sends an access code which can obtained from query params.
This code is needed along with client id and secret to obtain access token from github.
Again we need to redirect to client with the details because the calls to github getting timedout from node.
*/
console.log("redirected");

res.set("Code",req.query.code);
res.cookie("code",req.query.code);
res.redirect('http://localhost:4200/OAuthHome');
})


app.listen(envconfig.APP_PORT,function()
{
    console.log("app listening on port"+envconfig.APP_PORT);
})

