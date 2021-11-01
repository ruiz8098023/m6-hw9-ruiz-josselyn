var weatherEl = document.getElementById('weatherData')
var btn = document.querySelector('form')
var container = document.getElementById('container')
var inputEl = document.querySelector('input')

btn.onsubmit = function(e) {
    // FETCH, BOY!!!!!
    e.preventDefault()

    var query = inputEl.value

    if (!query) return 

    fetch('https://api.openweathermap.org/data/2.5/weather?appid=2a73efeae86f8a890c1d1c110285c8ef&units=imperial&q=' + query)

    .then(function(response) {
        return response.json()
    })

    .then(function(result) {

        console.log(result)
        showWeather(result)
    })

    .catch(function(err) {
        console.log(err)
    })

}


function showWeather(weather) {    
        
        // SET DIV BACK TO BLANK
        container.innerHTML = " "

        // CITY AND COUNTRY CODE
        var location = document.createElement('h3')
        location.textContent = weather.name + ", " + weather.sys.country
        container.appendChild(location)

        // WEATHER IS...
        var weatherIs = document.createElement('h3')
        weatherIs.textContent = weather.weather[0].description
        container.appendChild(weatherIs)

        // WEATHER ICON
        var img = document.createElement('img')
        img.src = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"
        container.appendChild(img)

        // TEMPERATURE IS...
        var temp = document.createElement('h3')
        temp.textContent = weather.main.temp  + " degrees Fahrenheit"
        container.appendChild(temp)

        // TEMPERATURE FEELS LIKE
        var tempFeels = document.createElement('h3')
        tempFeels.textContent = "Feels Like " + weather.main.feels_like + " degrees Fahrenheit"
        container.appendChild(tempFeels)
}
