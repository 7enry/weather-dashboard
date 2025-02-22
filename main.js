const apiKey = '';
const apiURL = '';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        switch(data.weather[0].main) {
            case 'Clouds': 
                weatherIcon.src = "icons/clouds.png";
                break;
            case 'Clear':
                weatherIcon.src = "icons/clear.png";
                break;
            case 'Rain':
                weatherIcon.src = "icons/rain.png";
                break;
            case 'Drizzle':
                weatherIcon.src = "icons/drizzle.png";
                break;
            case 'Mist':
                weatherIcon.src = "icons/mist.png";
                break;
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        console.log(data);
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})


searchBox.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
        checkWeather(searchBox.value);
    }
})