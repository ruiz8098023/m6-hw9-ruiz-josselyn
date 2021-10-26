var usersEl = document.getElementById('users')
var btn = document.querySelector('button')

btn.onclick = function() {
    // FETCH, BOY!!!!!

    console.log('clicked')
    fetch("api.openweathermap.org/data/2.5/weather?q=ocala,us&units=imperial&appid=2b0205684afdcd47c7543eaaa61080b6")
    .then(function(res) {
        return res.json()
    })

    .then(function(res) {
        console.log(res.results)

        // FOR EACH LOOP FUNCTION
        res.results.forEach(function(weather) {          

            // CREATE DIV
            var container = document.createElement('div')

            // CITY AND COUNTRY CODE
            var location = document.createElement('h1')
            location.value = weather.name + weather.sys.country
            container.appendChild(location)

            // WEATHER IS...
            var weatherIs = document.createElement('h3')
            weatherIs.textContent = weather.main
            container.appendChild(weather)

            // WEATHER ICON
            var img = document.createElement('img')
            img.src = weather.weather.icon
            container.appendChild(img)

            // TEMPERATURE IS...
            var temp = document.createElement('h3')
            temp.textContent = weather.main.temp
            container.appendChild(temp)

            // TEMPERATURE FEELS LIKE
            var tempFeels = document.createElement('h3')
            tempFeels.textContent = weather.main.feels_like
            container.appendChild(tempFeels)

            // PUT CONTAINER INTO MAIN IN HTML
            usersEl.appendChild(container)
        })

        // FOR OF LOOP
        // for (const user of res.results) {
        //     console.log(user.cell)
        // }
    })

}
