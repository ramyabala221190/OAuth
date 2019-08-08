import { Component } from '@angular/core';
import {AppService} from '../services/app.service';
declare var $:any;

@Component({
  templateUrl: '../templates/red.component.html'
})

export class RedirectComponent {
client_id:string="e6f712553aaa6ddf17a1";
client_secret:string="26b62c0189870706ddfdb8b610f0b07434754926";
client_code:string=document.cookie.split("=")[1];

constructor(private serv:AppService)
{

}

ngOnInit()
{
/*
redirected from /OAuthTest1992Redirect.
Code is stored in cookie.
We call the getToken() to post the client id,secret and code to github.
The access token is obtained in return.
Next we call getUserDetails() to call the users api of git hub to get the user details.
You need to pass the token in the Authorisation header.
*/
console.log("component redirected to");

this.serv.getToken(this.client_id,this.client_secret,this.client_code).subscribe(
data=>{
this.serv.getUserDetails(data["access_token"]).subscribe(
  data1=>{
console.log(data1);
  },
  err=>{
console.log(err);
  },
  ()=>{
    console.log("received user details");
  }
)
},
error=>{
  console.log(error);
},
()=>{
console.log("received token");
}
)

}

}
