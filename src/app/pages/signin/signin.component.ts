import { Component, OnInit } from '@angular/core';




//ng form 
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private toastr:ToastrService,
    private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }



  //onsubmit return  an object of the form NgForm
  onSubmit(f:NgForm)
  {
    //values form the object are being taken into the specified values called 
    //email and password........
    const {email,password } =f.form.value;

    //todo: Checking  can be done here 
    // firebase deal with password checking we can dowith email ,and other stuff
    //here after calling the function any method can be used like subscribe 
    //but prefered one according to firebase is .then() and .catch()
    this.auth.signIn(email,password).then(
      (res)=>
      {
        this.router.navigateByUrl('/');
        this.toastr.success("SignIn Success");


      }
    )
    .catch( (err)=>
    {
      console.log(err.message);
      this.toastr.error("SignIn  failed ");
    }

    )
  }

}
