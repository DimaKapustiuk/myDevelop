import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginComponent/login.component';
import { LoadComponent } from './components/downloadComponent/load.component';
import { FooterComponent } from './components/footerComponent/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}