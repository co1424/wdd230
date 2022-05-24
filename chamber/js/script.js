// // HEADER:


// FOOTER:
let currentdate = document.lastModified;
document.querySelector('#lastdate').textContent = currentdate;
console.log(currentdate);

// DYNAMIC YEAR AT FOOTER
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;