import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../app.component'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AppComponent]
})
export class LoginPageComponent implements OnInit {
	
	  constructor(private AppComponent: AppComponent) {}

  ngOnInit() {}

  visibleHeaderInProfile() {
  	const result = this.AppComponent.toggle();
  	console.log(this.AppComponent)
  	return result;
  }
}
