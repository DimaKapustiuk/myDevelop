import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InstagramService } from '../services/instagramService';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [InstagramService]
})
export class ProfilePageComponent implements OnInit {
	public user = {};
	public images = [];

	  constructor(private InstagramService: InstagramService) { }

  	ngOnInit() {
  		  this.InstagramService.getUser().subscribe(data => {
  		 	  this.user = data;
       });

  		 	this.InstagramService.getImages().subscribe(images => {
          this.images = images;
        });
   }
}

