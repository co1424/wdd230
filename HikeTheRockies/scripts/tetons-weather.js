// WEATHER API FETCH LINK AND API-ID:

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5832732&appid=7e66f9b233926bbe9d5693e38e4ca61f";

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
    document.querySelector('#figcaption').textContent = desc.toUpperCase();

    // WIND SPEED:
    const speed = jsObject.wind.speed;
    document.querySelector('#windSpeed').textContent = speed;

    // WINDCHILL CALCULATION


    let chill = Math.round((35.74 + (0.6215 * f)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * f * Math.pow(speed, 0.16)));

    const windchill = document.querySelector('#windChill');

    windchill.textContent = chill;


};

getWeather();