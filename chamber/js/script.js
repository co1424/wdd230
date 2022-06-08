let date = new Date();
let year = date.getFullYear();


// // HEADER DATE:
const todayDate = new Date();
const day = todayDate.getDay();
const month = todayDate.getMonth();
const monthDay = todayDate.getDate();


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

// MONDAY & TUESDAY BANNER ANNOUNCEMENT:
const parent = document.querySelector('#msg-box');


if (date.getDay() == 1 || date.getDay() == 2) {

    parent.style.display = 'show';
}

// DAYS SINCE LAST  VISITED: 
let lastvisiteddate = document.lastModified;
document.querySelector('#lastdate').textContent = lastvisiteddate;
console.log(lastvisiteddate);


if(!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
} else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    
    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

}

// HAMBURGER MENU:
const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation')

function toggleMenu() {
    navigation.classList.toggle('responsive');
    hamburgerBtn.classList.toggle('responsive');
}

hamburgerBtn.addEventListener('click', toggleMenu, false);

// FOOTER:
let currentdate = document.lastModified;
document.querySelector('#lastdate').textContent = currentdate;
console.log(currentdate);

// DYNAMIC YEAR AT FOOTER


document.querySelector('#year').textContent = year;

document.querySelector('#today_date').textContent = `${days[day]}, ${monthDay} ${monthNames[month]} ${year}`