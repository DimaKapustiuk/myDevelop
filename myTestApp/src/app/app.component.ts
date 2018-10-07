import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
		_visibility: boolean = false;
		constructor() {}

		set  visibility(value) {
			 this._visibility = value;
		}

	 toggle() {
	 		return this._visibility = !this._visibility;
	 } 
}
