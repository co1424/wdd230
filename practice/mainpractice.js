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
document.querySelector('img').setAttribute('src', 'MyPicture.jpg');
document.querySelector('img').setAttribute('width','120');

document.querySelector('img').classList.add('add_border');

// FUNTIONS:
function addayear(yr) {
    console.log(yr);
}

addayear(year);

// SELECTION: 
//(I DONT WANT ANYTHING TO HAPPEN UNTIL SOMETHING IS TRUE)

// if clause:
if (year == 2022) {
    console.log('current year')
}

// REPETITION (loops)

const myarray = ['CSE121B','WDD230', 'CIT111'];

function makealist(item) {
    document.querySelector('div').innerHTML += `<li> ${item} </li>`
}
myarray.forEach(makealist);

// This is what I need with JS for week 1

//lastModify property that works with document:

let currentdate = document.lastModified;
document.querySelector('#lastdate').textContent = currentdate;
console.log(currentdate);