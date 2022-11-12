import { Injectable } from '@angular/core';
//for making a web request

import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

//based on the input from the user , github acount with given userName is being fetched
  getUserDetails(userName:string)
  {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }


//responsilbe for getting repos acts as an observable and it is subscribed later...
getRepos(repoUrl:string)
{
  return this.http.get(repoUrl);
}

}
