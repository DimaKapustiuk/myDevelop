import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "../../login-page/login-page.component";
import { ProfilePageComponent } from "../../profile-page/profile-page.component";
import { ImageDetailsComponent } from "../../profile-page/image-details/image-details.component"

const routes: Routes = [
 	{
 		path: 'login',
 		component: LoginPageComponent
 	},
  {
  	path: 'dima_kapustiuk', 
  	component: ProfilePageComponent,
  	children: [
    {
      path: 'image/:id',
      component: ImageDetailsComponent,
    }
  	]
  },
  { 
  	path: '',
  	redirectTo: '/login',
  	pathMatch: 'full',
  },
 
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {} 