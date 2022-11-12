import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

import { GithubService } from 'src/app/services/github.service';



 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:string=""; //obtained by making a request...
  userName:string;//coming up from from -->Name of the user would like to search for 
  error=""; //for checking for any error....
repoUrl:any="";
  
  constructor(private githubService:GithubService,
    private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFind()
  {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user:any)=>
      {
        this.user=user;
        this.repoUrl=user.repos_url;
        
        this.error="";
        this.ref.detectChanges();
      },
      (err)=>
      {
        this.user="";
        this.error="user not found";
        this.ref.detectChanges();

      }
      
    )
  }

}
