// HEADER:
document.querySelector('img').setAttribute('src', 'images/ProMe.JPG');
document.querySelector('img').setAttribute('width', '120');

document.querySelector('img').classList.add('add_border');

// FOOTER:
let currentdate = document.lastModified;
document.querySelector('#lastdate').textContent = currentdate;
console.log(currentdate);