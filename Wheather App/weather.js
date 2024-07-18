var Input = document.querySelector('.input')
var search = document.querySelector('.button')
var Weather_ican = document.querySelector(".weather-ican")
var Weather_detail = document.querySelector(".weather-detail")
var temperature = document.querySelector('.temp')
var cityname = document.querySelector('.city-name')
var humidityy = document.querySelector('.humidity')
var windd = document.querySelector('.wind')

function checkWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&units=metric&appid=ae9c2d60fd78577b625c5ed9c99abab7`)

        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            console.log(data);
            temperature.innerHTML = Math.round(data.main.temp) + "°C"
            cityname.innerHTML = data.name
            humidityy.innerHTML = data.main.humidity + "%"
            windd.innerHTML = data.wind.speed + ' km/h'

            if (data.weather[0].main == 'Clear') {
                Weather_ican.src = 'images/clear.png'
            }
            else if (data.weather[0].main == 'Clouds') {
                Weather_ican.src = 'images/clouds.png'
            }
            else if (data.weather[0].main == 'Drizzle') {
                Weather_ican.src = 'images/drizzle.png'
            }
            else if (data.weather[0].main == 'Rain') {
                Weather_ican.src = 'images/rain.png'
            }
            else if (data.weather[0].main == 'Smoke') {
                Weather_ican.src = 'images/mist.png'
            }
            else if (data.weather[0].main == '') {
                Weather_ican.src = 'images/snow.png'
            }

            Weather_detail.style.display = 'block'


        })
        .catch(function (error) {
            console.log(error)
        })
}


Input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        checkWeather(Input.value)
    }
})