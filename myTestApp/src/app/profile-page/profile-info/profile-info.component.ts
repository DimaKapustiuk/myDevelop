import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
@Input() user;
private isModalDialogVisible: boolean = false;
  constructor() { }

	public showDialog() {
		this.isModalDialogVisible = true;
	}

	public closeModal(isConfirmed: boolean) {
		this.isModalDialogVisible = false;
	}

  ngOnInit() {
  }

}
