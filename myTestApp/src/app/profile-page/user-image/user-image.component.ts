import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {
 @Input() image;
  public isModalImageVisible: boolean = false;

  constructor() {
  }

	public closeModal(isConfirmed: boolean) {
		this.isModalImageVisible = false;
	}
	public showModal() {
		this.isModalImageVisible = true
  }
}
