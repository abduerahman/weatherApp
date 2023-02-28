async function getWeather(cityName){
    try{
        let apiKey = "8aa97d16e93646d64d67c60ac7e312dc";
        let link  = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        return await fetch(link).then(response => response.json()).then(data => {
            console.log(data);
            return insertinData(data);
        });
    }
    catch(error){
        console.log("Eroor" + error);
    }
}

let div = document.querySelector('#result');
let p = document.querySelector('#cityName');
let p2 = document.querySelector('#citydegree');

function insertinData(data){
    p.textContent = data.name;
    p2.textContent = data.weather[0].main;    
}

function gettingInfo(){
    let input = document.querySelector('input');
    getWeather(input.value)
    input.value = "";
}


