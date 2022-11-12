import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//what routes do we need to go.....
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


//for guarding the routes from docs .....
import { AngularFireAuthGuard,
  redirectUnauthorizedTo,
redirectLoggedInTo } from '@angular/fire/compat/auth-guard';


// all unauthorized people are redirected to  sign In page
const redirectUnauthorizedToLogin = () =>redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome=  ()  =>redirectLoggedInTo(['']);
const routes: Routes = [
  //order is very important here 

  { path: 'signin', 
    component: SigninComponent,     
     canActivate: [AngularFireAuthGuard], 
     data: { authGuardPipe: redirectLoggedInToHome }, //authorized person is pushed to home page
    },
    {

      path:'signup',
      component:SignupComponent,

    },
    {
      path:'',
      component:HomeComponent,
      canActivate: [AngularFireAuthGuard], //for activating the router guarding.
     data: { authGuardPipe: redirectUnauthorizedToLogin }, //unauthorized person is pushed to signin page when he is home page

    },

    { //pattern based things is to be placed at end;
      path:'**',
      component:PagenotfoundComponent,

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
