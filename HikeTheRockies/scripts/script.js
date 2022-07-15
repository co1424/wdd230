// // HEADER DATE:

//

let date = new Date();
let year = date.getFullYear();

const todayDate = new Date();
const day = todayDate.getDay();
const month = todayDate.getMonth();
const monthDay = todayDate.getDate();


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// MONDAY & TUESDAY BANNER ANNOUNCEMENT:
const parent = document.querySelector('#msg-box');

console.log(date.getDay());
if (date.getDay() == 4 || date.getDay() == 5) {

    parent.style.display = 'block';
}

// DAYS SINCE LAST  VISITED: 
let lastvisiteddate = document.lastModified;
document.querySelector('#lastdate').textContent = lastvisiteddate;
console.log(lastvisiteddate);


if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
} else {
    setStyles();
};

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();

    let difference = currDate - prevDate;
    console.log(difference);
    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

};


// DYNAMIC YEAR AT FOOTER

document.querySelector('#year').textContent = year;

document.querySelector('#today_date').textContent = `${days[day]}, ${monthDay} ${monthNames[month]} ${year}`

// SLIDESHOW IN INDEX.HTML //
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}