let date = new Date();
let year = date.getFullYear();


// // HEADER DATE:
const todayDate = new Date();
const day = todayDate.getDay()
const month = todayDate.getMonth()
const monthDay = todayDate.getDate()


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

// MONDAY & TUESDAY BANNER ANNOUNCEMENT:
const parent = document.querySelector('#msg-box');


if (date.getDay() == 1 || date.getDay() == 2) {

    parent.style.display = 'show';
}

// HAMBURGER MENU:
const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation')

function toggleMenu() {
    navigation.classList.toggle('responsive');
    hamburgerBtn.classList.toggle('responsive');
}

hamburgerBtn.addEventListener('click', toggleMenu, false);

// DYNAMIC YEAR AT FOOTER


document.querySelector('#year').textContent = year;

document.querySelector('#today_date').textContent = `${days[day]}, ${monthDay} ${monthNames[month]} ${year}`

// ---------------- LAZY LOADING --------------------- //


const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const options = {
    threshold: .5,
    rootMargin: "-50px"
};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                console.log(entry.target);
                preloadImage(entry.target);
                io.unobserve(entry.target); 
            }
        });     
    }, options
);


images.forEach(image => {
    io.observe(image);
});


// FOOTER:
let currentdate = document.lastModified;
document.querySelector('#lastdate').textContent = currentdate;
console.log(currentdate);

