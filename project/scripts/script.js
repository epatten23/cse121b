const getWeather = async() => {
    const apiKey = "658d7fc25df914b28e9a31ffb55c32a4";
    const city = document.getElementById("cityInput").value.trim();

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    weather = await response.json()
    displayWeather(weather);
};

function reset_weather(){
    document.getElementById("weatherInfo").innerHTML = "";
}

function reset_tips(){
    document.getElementById("tips").innerHTML = "";
}

function displayWeather(weather) {
    reset_weather();
    const weatherInfo = document.getElementById("weatherInfo");
    const temperature = weather['main']['temp'] * 9/5 +32;
    const description = weather['weather'][0]['description'];

    let city = document.createElement("h2")
    city.textContent = `${weather['name']}, ${weather['sys']['country']}`;
    weatherInfo.appendChild(city);
    let temp = document.createElement("p");
    temp.textContent = `Temperature: ${temperature.toFixed(0)}°F`;
    weatherInfo.appendChild(temp);
    let descript = document.createElement("p");
    descript.innerHTML = `Description: ${description}`;
    weatherInfo.appendChild(descript);
    give_advice(temperature);
}

function give_advice(temp){
    reset_tips()
    const tipInfo = document.getElementById("tips");
    let advice_bullets = document.createElement("ul");
    let title = document.createElement("h3");
    title.innerHTML = "Some tips for the weather:";
    tipInfo.appendChild(title);
    if (temp > 60) {
        let hot_array = ['Stay hydrated', 'Stay cool', "Wear a wide-brimmed hat", "Don't forget sunscreen!"];
        hot_array.forEach(adivce => {
            let single_advice = document.createElement('li');
            single_advice.textContent = adivce;
            advice_bullets.appendChild(single_advice);
            tipInfo.appendChild(advice_bullets);
        })
    }else {
        let cold_array = ["Wear layers to stay warm", "Stay dry", "Make sure you have enough food and medicine", "Stay off roads if possible"];
        cold_array.forEach(adivce => {
            let single_advice = document.createElement('li');
            single_advice.textContent = adivce;
            advice_bullets.appendChild(single_advice)
            tipInfo.appendChild(advice_bullets);
        });
    };
};

document.querySelector("#button").addEventListener("click", getWeather);