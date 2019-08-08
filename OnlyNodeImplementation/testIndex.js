const express=require('express');
const envconfig=require('./config');
const cors=require('cors');
const axios=require('axios');
const request=require('request');
const app=express();

const corsOptions={
origin: 'http://localhost:4200',
methods:['GET','POST','PUT','DELETE','OPTIONS'],
}

app.use(express.static(__dirname+ '/public')); //To access jquery file in user.html
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile); //To render the html files
app.use(cors(corsOptions));

//Implementing just using Nodejs

app.get('/',function(req,res)
{
    res.render('testindex.html',{redirect_url:'https://github.com/login/oauth/authorize?client_id='+envconfig.CLIENT_ID+'&redirect_uri='+envconfig.REDIRECT_URI});
});

app.get('/OAuthTest1992Redirect',function(req,res)
{
/*We are redirected here after successful user sign in from git hub.
Git hub sends an access code which can obtained from query params.
This code is needed along with client id and secret to obtain access token from github.
*/
console.log("redirected");
res.render('user.html',{token_url:'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id='+envconfig.CLIENT_ID+'&client_secret='+envconfig.CLIENT_SECRET+'&code='+req.query.code});

})


app.listen(envconfig.APP_PORT,function()
{
    console.log("app listening on port"+envconfig.APP_PORT);
})

