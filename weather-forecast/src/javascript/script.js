document.getElementById('search').addEventListener('submit', async(event) => {
    event.preventDefault();


    const cityName = document.querySelector('#city_name').value;

    if (!cityName) {
        document.querySelector("#weather").classList.remove("show");
        showAlert('you must type a valid city name...');
        return;
    }


    const apiKey = `1b5b7bfff38ee5d6229472ba862c01fd`
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric`

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod == 200) {
        showInfo({
           city: json.name,
           country: json.sys.country,
           temp: json.main.temp,
           tempMax: json.main.temp_max,
           tempMin: json.main.temp_min,
           description: json.weather[0].description,
           tempIcon: json.weather[0].icon,
           windSpeed: json.wind.speed,
           humidity: json.main.humidity,


        }) 

    } else {
        document.querySelector("#weather").classList.remove("show");
        showAlert(`is not possible to find...  
            <img src="./src/images/unfind.svg"/>`)
    }

    console.log(json)
});

function showInfo(json) {
    showAlert('');

    document.querySelector("#weather").classList.add("show");

    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`
    document.querySelector("#temp-value").innerHTML = `${json.temp.toFixed(1)}<sup>°C</sup>`
    document.querySelector("#temp-description").innerHTML = `${json.description}`
    document.querySelector('#temp-img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector("#temp-max").innerHTML = `${json.tempMax}<sup>°C</sup>`
    document.querySelector("#temp-min").innerHTML = `${json.tempMin}<sup>°C</sup>`
    document.querySelector("#humidity").innerHTML = `${json.humidity}%`
    document.querySelector("#wind").innerHTML = `${json.windSpeed}Km/h`

}

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}