import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.css']
})
export class ModalSettingsComponent {
 @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

 constructor() { }

	confirm() {
		this.isConfirmed.emit(true);
	}
	 close() {
		this.isConfirmed.emit(false);
	}

}
