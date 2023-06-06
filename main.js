//import * as allData from '../data/list.js';
//import {data } from './data/list.js';

const ulDOM = document.querySelector('ul');

const data = [
    {id: 1, text: 'Labas'},
    {id: 2, text: 'Rytas'},
    {id: 2, text: 'Lietuva'},
]

ulDOM.innerHTML = ''

// LOL


const data = fetch('https://front-end-by-rimantas.github.io/44-grupe-fetch/data/users.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (const user of data) {
            console.log(user);
        }
    });


// let HTML = '';

// for (const item of data) {
//     HTML += `<li>${item.id}) ${item.text}</li>`;
// }

// ulDOM.innerHTML = HTML;