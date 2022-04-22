// SEQUENCE
// Variables and the Date object
let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

//Selecting element in HTML and DOM manipulation
//This is the shortcut for what we did below...
document.querySelector('div').innerHTML = '<p>This is my sample paragraph.</p>';

//This is the loooooong way to do what we did above! 
let newparagraph = document.createElement('p'); 
newparagraph.textContent = 'This is my sample paragraph.';
document.querySelector('div').appendChild(newparagraph);

// IMAGE:
document.querySelector('img').setAttribute('src','images/MyPicture.jpg');
document.querySelector('img').setAttribute('width','400');

document.querySelector('img').classList.add('add_border');

// SELECTION: 
//(I DONT WANT ANYTHING TO HAPPEN UNTIL SOMETHING IS TRUE)

// if clause:
if (year == 2022) {
    console.log('current year')
}