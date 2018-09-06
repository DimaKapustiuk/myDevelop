document.addEventListener('DOMContentLoaded', () => {
	const refs = {
	form: document.querySelector('form'),
	input: document.querySelector('input'),
	btn: document.querySelector('button')
}

refs.form.addEventListener('submit', handleSubmitForm);

const massege = () => {
	console.log(refs.input.value)
} 

function handleSubmitForm(event) {
	event.preventDefault();
	massage();
}
})