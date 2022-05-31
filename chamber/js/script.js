// // HEADER:
const todayDate = new Date();
const day = todayDate.getDay()
const month = todayDate.getMonth()
const monthDay = todayDate.getDate()


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

// FOOTER:
let currentdate = document.lastModified;
document.querySelector('#lastdate').textContent = currentdate;
console.log(currentdate);

// DYNAMIC YEAR AT FOOTER
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;

document.querySelector('#today_date').textContent = `${days[day]}, ${monthDay} ${monthNames[month]} ${year}`