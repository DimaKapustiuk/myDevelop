import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { InstagramService } from '../services/instagramService';
import { Http } from '@angular/http';
import { throwError  } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  providers: [InstagramService]
})
export class WelcomePageComponent implements OnInit {
 private accessToken: string;
 private welcomeHash : string;
 private user: Object;

  constructor(private http: Http, private Instagram: InstagramService) {
  this.initUser(this.accessToken).subscribe(data => this.user = data)
  	

  }

  ngOnInit() {
  	this.welcomeHash = window.location.hash;
  	this.accessToken = this.welcomeHash.slice(1);
		
  	localStorage.setItem('token', JSON.stringify(this.accessToken));
  }
  
  ngAfterViewInit() {
  	this.initUser(this.accessToken).subscribe(data => console.log(data))
  }

  initUser(token) {
    return this.http.get(`${this.Instagram.urls.user}?${token}`)
    .pipe(map(response => response.json()))
    .pipe(map(obj => obj.data))
  }
  
}
