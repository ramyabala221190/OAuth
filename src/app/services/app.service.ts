import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Response} from '@angular/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()

export class AppService
{
httpOptions={
headers:new HttpHeaders({
'Accept':'application/json'
})
}


constructor(private http:HttpClient)
{

}

getGitURL():any
{
//url and client id details received here
return this.http.get('http://localhost:8080/userAuthentication').pipe(map(res=>res));
}

getToken(client_id,client_secret,client_code)
{

return this.http.post('https://github.com/login/oauth/access_token?client_id='+client_id+'&client_secret='+client_secret+'&code='+client_code,{},this.httpOptions)
    .pipe(map(res=>res));
}

getUserDetails(token):any
{
var httpOptions1={
headers:new HttpHeaders({
Authorization: 'token ' + token
})
}
    return this.http.get('https://api.github.com/user',httpOptions1).pipe(map(res=>res));
}

/*
avatar_url: "https://avatars0.githubusercontent.com/u/32287620?v=4"
bio: null
blog: ""
company: null
created_at: "2017-09-26T04:28:01Z"
email: null
events_url: "https://api.github.com/users/ramyabala221190/events{/privacy}"
followers: 0
followers_url: "https://api.github.com/users/ramyabala221190/followers"
following: 0
following_url: "https://api.github.com/users/ramyabala221190/following{/other_user}"
gists_url: "https://api.github.com/users/ramyabala221190/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/ramyabala221190"
id: 32287620
location: null
login: "ramyabala221190"
name: null
node_id: "MDQ6VXNlcjMyMjg3NjIw"
organizations_url: "https://api.github.com/users/ramyabala221190/orgs"
public_gists: 0
public_repos: 9
received_events_url: "https://api.github.com/users/ramyabala221190/received_events"
repos_url: "https://api.github.com/users/ramyabala221190/repos"
site_admin: false
starred_url: "https://api.github.com/users/ramyabala221190/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/ramyabala221190/subscriptions"
type: "User"
updated_at: "2019-07-23T12:26:52Z"
url: "https://api.github.com/users/ramyabala221190"



*/


}

