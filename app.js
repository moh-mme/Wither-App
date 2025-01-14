// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={0f4ccd4297c98c0cb2624c846ef64da1}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={0f4ccd4297c98c0cb2624c846ef64da1}


let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let witherIcon = document.querySelector(".wither-icon");
let humidty = document.querySelector(".humidty");
let wind = document.querySelector(".wind");
let search = document.querySelector(".search button")
let input = document.querySelector(".input-text")
let country = document.querySelector(".country")


const apiKey = "0f4ccd4297c98c0cb2624c846ef64da1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=`;


chackWeather(window.localStorage.getItem("location"));
search.addEventListener("click",()=>{
    if (input.value !== ""){
        chackWeather(input.value);
        window.localStorage.setItem("location" , input.value);
        input.value = "";
    }
})

async function chackWeather(cite) {
    const response = await fetch(apiUrl + cite +`&appid=${apiKey}`);
    var data = await response.json();
    city.innerHTML = data.name;
    country.innerHTML = `country: ${data.sys.country}`;
    temp.innerHTML = Math.round(data.main.temp - 273.15)+ "°C";
    humidty.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";
    wind.witherIcon = data.weather.icon;

    if(data.weather[0].main == "Clouds"){
        witherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        witherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        witherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        witherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main== "Mist"){
        witherIcon.src = "images/mist.png";
    }
}
