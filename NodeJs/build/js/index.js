'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var refs = {
		form: document.querySelector('form'),
		input: document.querySelector('input'),
		btn: document.querySelector('button')
	};

	refs.form.addEventListener('submit', handleSubmitForm);

	var massege = function massege() {
		console.log(refs.input.value);
	};

	function handleSubmitForm(event) {
		event.preventDefault();
		massege();
	}
});