import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoadComponent } from './components/downloadComponent/load.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProfileInfoComponent } from './profile-page/profile-info/profile-info.component';
import { UserImageComponent } from './profile-page/user-image/user-image.component';
import { ImageHover } from './imageHover.directive';
import { ModalSettingsComponent } from './profile-page/modal-settings/modal-settings.component';




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
    ProfileInfoComponent,
    UserImageComponent,
    ImageHover,
    ModalSettingsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}