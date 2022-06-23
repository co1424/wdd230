// WEATHER API FETCH LINK AND API-ID:
// const url = 'https://api.openweathermap.org/data/2.5/weather?id=3688689&appid=7e66f9b233926bbe9d5693e38e4ca61f';

//

// const apiURL = "LINK GOES HERE";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//   });

// THIS DOES THE SAME THING AS ABOVE:

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
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

};
getWeather();