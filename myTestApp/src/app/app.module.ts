import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoadComponent } from './components/downloadComponent/load.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileInfoComponent } from './profile-page/profile-info/profile-info.component';
import { UserImageComponent } from './profile-page/user-image/user-image.component';
import { ImageHover } from './imageHover.directive';
import { ModalSettingsComponent } from './profile-page/modal-settings/modal-settings.component';
import { ModalImagesComponent } from './profile-page/modal-images/modal-images.component';
import { ImageDetailsComponent } from './profile-page/image-details/image-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';



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
    ModalImagesComponent,
    ImageDetailsComponent,
    PageNotFoundComponent,
    WelcomePageComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}