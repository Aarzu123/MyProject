import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'',redirectTo:"landing-page",pathMatch:"full"},
  {path:'landing-page',component:LandingPageComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about-us',component: AboutUsComponent},
  {path:'contact-us',component: ContactUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
