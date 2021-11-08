// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Bonus:
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// utilizzo un forEach per generare le icone nella pagina
const cont = document.getElementById('container');
iconGen(icons);

// uso la funzione filter per estrapolare le icone che mi interessano

// icone degli animali
const animals = icons.filter((icona) => icona.type === 'animal');
console.log(animals);

// icone dei vegetali
const vegetables = icons.filter((icona) => icona.type === 'vegetable');
console.log(vegetables);

// icone degli utenti
const users = icons.filter((icona) => icona.type === 'user');
console.log(users);

// aggiungo un selettore per stampare in pagina solo le icone di una determinata categoria
const filterSelect = document.getElementById('category-select');

filterSelect.addEventListener('input',
	function () {

		cont.innerHTML = '';

		switch (filterSelect.value) {

			case 'all':
				iconGen(icons);
			break;

			case 'animals':
				iconGen(animals);
			break;

			case 'vegetables':
				iconGen(vegetables);
			break;

			case 'users':
				iconGen(users);
			break;
		}
	}
);

// funzioni 

// genera icone
function iconGen(array) {
	array.forEach((icona) => {
		cont.innerHTML += `
	<div class="icona" style="color: ${icona.color};">
        <i class="${icona.family} ${icona.prefix}${icona.name}"></i>
        <span>${icona.name}</span>
    </div>`
	});
}