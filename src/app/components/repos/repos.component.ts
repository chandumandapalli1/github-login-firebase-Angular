import { Component, OnInit,Input,OnChanges, ChangeDetectorRef } 
      from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input ()  repoUrl:string;
  repos=[];

  constructor(private githubService:GithubService,
            private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{

    if(this.repoUrl)
    {
      //if this repoURL is there then we subscribe to 
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos:[])=>{
          this.repos=repos;  //assaigning the repos got from user to local repos

          this.ref.detectChanges();

        },
        (err)=>{ //if there any errors
          console.log(err);
        }

      )
    }
  }

}
