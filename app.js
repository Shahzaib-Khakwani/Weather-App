const api = 'http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=a116c2880c8f0fcb866998a0';


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=82005d27a116c2880c8f0fcb866998a0`)
        .then(function(response){
            let data = response.json();
            return data ;
        })
        .then(function(data){
            document.querySelector(".location").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = `${Math.floor(data.main.temp - 273)}<span>°C</span>`;
            document.querySelector(".description").innerHTML = data.weather[0].description;
            document.querySelector(".icon").innerHTML = `<img src="icons/${data.weather[0].icon}.png" alt="">`;
        })
    })
}