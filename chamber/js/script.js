// WEATHER API FETCH LINK AND API-ID:


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3688689&appid=7e66f9b233926bbe9d5693e38e4ca61f";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    // CHANGE TEMPERATURE FROM K TO F:
    let f = (jsObject.main.temp - 273.15) * 1.8 + 32;
    // GETTING TEMPERATURE:
    document.querySelector('#current-temp').textContent = f.toFixed(0); // This "toFixed controls decimal places!"
    // GETTING ICON AND CAPTION:
    console.log('https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png');
    console.log(jsObject.weather[0].icon);
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    console.log(jsObject.wind.speed);
    document.querySelector('#figcaption').textContent = desc;

    // THIS DOES CAMEL-CASE ON THE ICON CAPTION:
    const string = 'light rain';

    const array = string.split(' ');

    function uppercaseFirst(string) {

        const uppercaseString = string.charAt(0).toUpperCase() + string.slice(1);



        return uppercaseString;

    }

    const newArray = array.map((word) => uppercaseFirst(word)).join(' ');

    console.log(newArray);
    //
    // function capitalizeFirstLetter(desc) {
    //     return desc.charAt(0).toUpperCase() + desc.slice(1);
    // };
    // console.log(capitalizeFirstLetter(desc));

    // WIND SPEED:
    const speed = jsObject.wind.speed;
    document.querySelector('#windSpeed').textContent = speed;

    // WINDCHILL CALCULATION


    let chill = Math.round((35.74 + (0.6215 * f)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * f * Math.pow(speed, 0.16)));

    const windchill = document.querySelector('#windChill');

    windchill.textContent = chill;


};

getWeather();


//

let date = new Date();
let year = date.getFullYear();


// // HEADER DATE:
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
if (date.getDay() == 1 || date.getDay() == 2) {

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
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();

    let difference = currDate - prevDate;
    console.log(difference);
    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

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