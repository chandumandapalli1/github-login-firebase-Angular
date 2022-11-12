import { Injectable } from '@angular/core';

//brought from github.com/angular/angularfire -> Docs-> Auth -> getting started; 
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //injecting the imported AngularFireAuth into the constructor as a variable auth;
  constructor(private authFire:AngularFireAuth) { }




  signUp(email:string, password:string)
  {
    //below statement makes it as observable 
    return this.authFire.createUserWithEmailAndPassword(email,password);
  }

  signIn(email:string, password:string)
  {
    return this.authFire.signInWithEmailAndPassword(email, password);
  }

//if user already exists grabbing properties from the user..... like name, email, uuid

getUser()
{
  //authState  is a gigantic object which contains  lot of things
  return this.authFire.authState;

}


signOut()
{
  return this.authFire.signOut();
}



}
