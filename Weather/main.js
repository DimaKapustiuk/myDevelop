//https://api.apixu.com/v1/current.json?key=bc55517b6f85421d900212814182208&q=Paris
const page = document.querySelector('body')
const form = document.querySelector('.form');
const userInput = document.querySelector('input[data-info = "location"]')


form.addEventListener("submit", handleSubmitForm)

function handleSubmitForm (evt) {
	evt.preventDefault();

	fetchRequestWeater(userInput);
}

function fetchRequestWeater(input) {
    return fetch(`https://api.apixu.com/v1/current.json?key=bc55517b6f85421d900212814182208&q=${input.value}`)
        .then(response => {
            if (response.ok) return response.json();

            throw new Error('Error')
        })
        .then(data => {
            const current = data.current;
            const location = data.location;
            const infoWether = createWetherBlockInfo(location, current);

            form.insertAdjacentHTML('beforeend', infoWether)

        })
        .catch(error => alert(error))
}


function formatTempCelc(temp) {
    if (temp > 0) {
        return `+${temp}`
    }

    return `-${temp}`
}

function createWetherBlockInfo({ name }, { temp_c, condition }) {
    return `<div class="wether-wrapper">
		<h2 class="wether-location">${name}</h2>
		<div class="temperature">
			<p class="wether-temperature">${formatTempCelc(temp_c)}</p>
			<img src=${"http:" + condition.icon} alt = "wether icon">
		</div>		
		</div>`
}