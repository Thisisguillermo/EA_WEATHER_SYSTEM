const apiKey = 'dd7abd123d47b36357eb5e8568f8526f';
let weatherUnits = 'metric';
let weatherDisplayLanguage = 'en';

// meanWeather
let TemperatureDescription = document.querySelector('.temperature-description');
let TemperatureDegree = document.querySelector('.temperature-degree');
let LocationTimezone = document.querySelector('.location-timezone');
let WeatherIcon = document.querySelector('.weathericon')

// subWeather
let TemperatureDegree2 = document.querySelector('.temperature-degree_2');
let TemperatureDescription2 = document.querySelector('.temperature-description_2');
// let LocationDate = document.querySelector('.location-date');
let WeatherIcon2 = document.querySelector('.weathericon_2');

// subWeatherTwo
let TemperatureDegree3 = document.querySelector('.temperature-degree_3');
let TemperatureDescription3 = document.querySelector('.temperature-description_3');
// let LocationDate = document.querySelector('.location-date');
let WeatherIcon3 = document.querySelector('.weathericon_3');

// subWeatherFour

let TemperatureDegree4 = document.querySelector('.temperature-degree_4');
let TemperatureDescription4 = document.querySelector('.temperature-description_4');
// let LocationDate = document.querySelector('.location-date');
let WeatherIcon4 = document.querySelector('.weathericon_4');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    };
};


function showPosition(position) {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    console.log(lat, long);
    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=${weatherUnits}&lang=${weatherDisplayLanguage}&appid=${apiKey}`
    let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${weatherUnits}&lang=${weatherDisplayLanguage}&appid=${apiKey}`

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {

            const mainWeather = () => {

                const { temp } = data.list[0].main;
                const location = data.city.name;
                const { description } = data.list[0].weather[0];
                const { weathermain, icon, id } = data.list[0].weather[0];

                // set DOM elements from the api
                TemperatureDegree.textContent = Math.floor(temp) + '°';
                LocationTimezone.textContent = location;
                TemperatureDescription.textContent = description[0].toUpperCase() + description.slice(1).toLowerCase();

                openWeatherIconId = icon;
                let openWeatherPicture = `http://openweathermap.org/img/wn/${openWeatherIconId}@2x.png`;

                let img = document.createElement('img');
                img.src = openWeatherPicture;
                document.getElementById('icon1').appendChild(img);
            };


            mainWeather();
        });


    fetch(api2)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const subWeather = () => {

                // Defining data
                const iconTwo = data.daily[0].weather[0].icon;
                const tempTwo = data.daily[0].temp.day;
                const description = data.daily[0].weather[0].description;

                // Set data to DOM element(s)
                TemperatureDegree2.textContent = Math.floor(tempTwo) + '°';
                TemperatureDescription2.textContent = description[0].toUpperCase() + description.slice(1).toLowerCase()
                // LocationDate.textContent = date.slice(5, 10);

                openWeatherIconId2 = iconTwo
                let openWeatherPicture2 = `http://openweathermap.org/img/wn/${openWeatherIconId2}@2x.png`;

                let img = document.createElement('img');
                img.src = openWeatherPicture2;
                document.getElementById('icon_2').appendChild(img);

            }

            subWeather()

            const subWeatherTwo = () => {

                const iconThree = data.daily[1].weather[0].icon;
                const tempThree = data.daily[1].temp.day;
                const description = data.daily[1].weather[0].description;

                // Set data to DOM element(s)

                TemperatureDegree3.textContent = Math.floor(tempThree) + '°';
                TemperatureDescription3.textContent = description[0].toUpperCase() + description.slice(1).toLowerCase()
                // LocationDate.textContent = date.slice(5, 10);

                openWeatherIconId2 = iconThree
                let openWeatherPicture2 = `http://openweathermap.org/img/wn/${openWeatherIconId2}@2x.png`;

                let img = document.createElement('img');
                img.src = openWeatherPicture2;
                document.getElementById('icon_3').appendChild(img);
            }

            subWeatherTwo();

            const subWeatherThree = () => {

                const iconFour = data.daily[2].weather[0].icon;
                const tempFour = data.daily[2].temp.day;
                const description = data.daily[2].weather[0].description;

                // Set data to DOM element(s)

                TemperatureDegree4.textContent = Math.floor(tempFour) + '°';
                TemperatureDescription4.textContent = description[0].toUpperCase() + description.slice(1).toLowerCase()
                // LocationDate.textContent = date.slice(5, 10);

                openWeatherIconId2 = iconFour
                let openWeatherPicture2 = `http://openweathermap.org/img/wn/${openWeatherIconId2}@2x.png`;

                let img = document.createElement('img');
                img.src = openWeatherPicture2;
                document.getElementById('icon_4').appendChild(img);
            }

            subWeatherThree();

        });
}

window.addEventListener('load', () => {
    getLocation();
});