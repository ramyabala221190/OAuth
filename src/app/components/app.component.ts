import { Component } from '@angular/core';
import {AppService} from '../services/app.service';
declare var $:any;

@Component({
  templateUrl: '../templates/app.component.html'
})

export class AppComponent {

constructor(private serv:AppService)
{

}

ngOnInit()
{
this.serv.getGitURL().subscribe(
data=>{
$('a#login').attr('href',data.redirect_url); //Storing the url with client id as a part of href

/*
When user clicks the button, he will redirected to github login page if not yet logged in.
This is the step where github(authorization server) checks the identity of the user.
Once the user identity is verified, github redirects to http://localhost:8080/OAuthTest1992Redirect
*/
},
error=>{
  console.log(error);
},
()=>{
console.log("received url");
}
)
}

}
