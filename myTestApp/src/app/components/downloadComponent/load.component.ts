import { Component } from '@angular/core';
import { URLservice } from '../services/loadUrl.servece'
 
@Component({
	selector: 'app-load',
	templateUrl: './load.component.html',
	styleUrls:['./load.component.scss'],
	providers: [URLservice]
})

export class LoadComponent{
	 urls = [];
	 
	 constructor (private URLS: URLservice) {
		this.urls = this.URLS.urls;
	}
}