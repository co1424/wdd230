// WINDCHILL CALCULATION

const temp = document.querySelector('#degrees').textContent;
const windspeed = document.querySelector('#windSpeed').textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

const windchill = document.querySelector('#windChill')

windchill.textContent = chill;