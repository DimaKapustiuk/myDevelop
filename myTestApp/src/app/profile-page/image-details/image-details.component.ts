import { Component, OnInit, Input } from '@angular/core';
import { UserImageComponent } from '../user-image/user-image.component';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
 	userImage = {};
  userInfo = {};
  constructor(private Image: UserImageComponent) {}

  ngOnInit() {
  	 this.userImage = this.Image.image;
  }
}
