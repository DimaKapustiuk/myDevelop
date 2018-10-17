import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	links = [
		'О НАС',
		'ПОДДЕРЖКА',
		'ПРЕССА',
		'API',
		'ВАКАНСИИ',
		'КОНФИДЕНЦИАЛЬНОСТЬ',
		'УСЛОВИЯ',
		'ДИРЕКТОРИЯ',
		'ПРОФИЛИ',
		'ХЭШТЕГИ',
		'ЯЗЫК'
	]
}