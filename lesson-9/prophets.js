// Site where we are getting info from:
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.log(jsonObject); // temporary checking for valid response and data parsing.
            const prophets = jsonObject['prophets'];
            prophets.forEach(displayProphets);
        }

    );


// This how to put the table on the screen:

function displayProphets(prophet) {
    //Defining Elements
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dateOfBirth = document.createElement('p');
    let placeOfBirth = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = prophet.name + ' ' + prophet.lastname;
    card.appendChild(h2);
    // Pulling information from JSON file:
    dateOfBirth.textContent = `${prophet.birthdate}`;
    placeOfBirth.textContent = `${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);

    // This is displaying the objects onto the screen:
    card.appendChild(h2);
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(img);

    document.querySelector('.cards').appendChild(card);
}

// TABLE JS:

function displayTable(prophet) {
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = prophet.name + ' ' + prophet.lastname;

    let td_birthDate = document.createElement('td');
    td_birthDate.textContent = prophet.birthdate;

    list_row.appendChild(td_name);
    list_row.appendChild(td_birthDate);

    document.querySelector('table').appendChild(list_row);
} 