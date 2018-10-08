import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadComponent } from './components/downloadComponent/load.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


const routes = [
  {path: '', component: LoginPageComponent},
  {path: 'dima_kapustiuk', component: ProfilePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    FooterComponent,
    ProfilePageComponent,
    LoginPageComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}