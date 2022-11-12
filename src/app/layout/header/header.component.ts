import { Component, OnInit } from '@angular/core';

//bringing authserive from servies/auth.service file 
import { AuthService } from 'src/app/services/auth.service';
//from npm ->ngx-toastr
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:string="";
// uuid:string="";
//injecting  the imported elements into  the constructor 
  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { 


    auth.getUser().subscribe((user)=>
    {
      // Here emal may or maynot be present so using ? before it ...
      this.email=user?.email;
      // this.uuid=user?.uuid;
    })
  }

  ngOnInit(): void {}


  //since the signOut is workingon the web using async  and  while using async also use 
  // await
  async handleSignOut()
  {
    try{
        const res=await this.auth.signOut(); //response from the signout 
        this.router.navigateByUrl('/signin'); //after being signedout redirecting to sign in page 
        this.toastr.info("Login Again to continue");
        this.email="";   //after signed out email is to be made NULL ; 
    }
    catch(error)
    {
      this.toastr.error("Something is Wrong");
    }

  }





}
