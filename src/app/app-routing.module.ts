import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './home/profile/profile.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { VerifyComponent } from './user-auth/verify/verify.component';

const routes: Routes = [
  {
    path: 'user-auth/register',
    component: RegisterComponent
  },
  {
    path: 'user-auth/login',
    component: LoginComponent
  },
  {
    path: 'user-auth/verify',
    component: VerifyComponent
  },
  {
    path: 'home/profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
