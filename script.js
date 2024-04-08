
function disappear(){
    var clickedDiv = document.querySelector(".cookie");
    clickedDiv.remove(); 

}
var button = document.querySelector(".cookie button");
button.addEventListener('click',disappear);


function display(){
    alert("Loading Weather Report...");
}

var city= document.querySelector(".header ul ");
city.addEventListener('click',display);



function displayName(event){
    var clickedCity =event.target.textContent;
    var cityName = document.getElementById('cityName');
    cityName.textContent = clickedCity;
}

var listEl = document.querySelectorAll(".header ul");

listEl.forEach(function(li){
    li.addEventListener('click',displayName);

});


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


function updateTemperature() {
    
    var selectedUnit = document.getElementById('temperature').value;
    var temperatureSpans = document.querySelectorAll('.container #weather span');

    temperatureSpans.forEach(function(span) {
        var temperature = parseInt(span.textContent);
        let updatedTemperature;

        if (selectedUnit === 'farenheit') {
            updatedTemperature = celsiusToFahrenheit(temperature);
        } else {
            updatedTemperature = fahrenheitToCelsius(temperature);
        }

        span.textContent = updatedTemperature;
    });
}

document.getElementById('temperature').addEventListener('change', updateTemperature);
