let Kyiv = document.getElementById('ki');
let Lviv = document.getElementById('lv');
let Odesa = document.getElementById('od');
let Dnipr = document.getElementById('dn');


function cityName(x,y) {
    x.onclick = function () {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + y + '&appid=291115857a205ad90379600be3f21429')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector(".main__second-title").innerHTML = data.name
                document.querySelector(".main__second-piont").innerHTML = "temp : " + Math.round(data.main.temp - 273) + "&deg;"
                document.querySelector(".main__second-state").innerHTML = data.weather[0]["main"];
                document.querySelector(".main__second-img").innerHTML =
                    '<img src=" https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">'
                document.querySelector(".main__second-data").innerHTML = "wind speed : " + data.wind.speed + " m/sec"

            })
    }
}

cityName(Lviv,'Lviv');
cityName(Kyiv,'Kyiv');
cityName(Odesa,'Odesa');
cityName(Dnipr,'Dnepr');



