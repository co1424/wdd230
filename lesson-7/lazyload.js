const images = document.querySelectorAll('[data-src]');
const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px 100px 0px"
};

function preloadImage(image) {
    const source = image.getAttribute('data-src');
    if (!source) {
        return;
    } 

    image.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);}
        })
    }, imgOptions

);



images.forEach(image => {
    io.observe(image);
})

// localStorage

localStorage.setItem('msg1', 'Hello Permanent');

// Session Storage (Will reset after you close tab):

sessionStorage.setItem('msg2', 'Hi Temporary');

// This is to retreive the value:
console.log(localStorage.getItem('msg1'));


// Date for HW: Days since last visit!! ////////////////////////////////
let visit_heading = document.querySelector('.visited');
// Get today's date:
let now_date = new Date();
console.log(now_date);
//
let stored_date = localStorage.getItem('last_visited');
let last_date = new Date(stored_date);
//
if (!stored_date) {
    visit_heading.textContent = 'Welcome!';
} else {
    // cal difference between two dates.
    let diff_time = now_date.getTime() - last_date.getTime();
    // call difference between the two dates"
    let diff__days = Math.round(diff_time/(1000 * 60 * 60 * 24));
    // 
    visit_heading.textContent = diff__days + 'days since your last visit.';
};


// Turn the date from milliseconds to secs, mins, hours, days:
// let diff__secs = diff_time/1000;

// let diff__mins = diff_time/(1000 * 60);

// let diff__hours = diff_time/(1000 *60 *60);

// let diff__days = Math.round(diff_time/(1000 * 60 * 60 * 24));

// console.log(diff__mins);


