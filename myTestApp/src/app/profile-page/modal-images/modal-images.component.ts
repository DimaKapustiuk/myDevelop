import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-images',
  templateUrl: './modal-images.component.html',
  styleUrls: ['./modal-images.component.css']
})
export class ModalImagesComponent implements OnInit {

@Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

 constructor() { }

	close() {
		this.isConfirmed.emit(false);
	}

  ngOnInit() {
  }

}
