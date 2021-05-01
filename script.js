var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var date = document.querySelector('.date');
var weather = document.querySelector('.weather');
var temp = document.querySelector('.temp');
var date0 = document.querySelector('.date0');
var weather0 = document.querySelector('.weather0');
var temp0 = document.querySelector('.temp0');
var date1 = document.querySelector('.date1');
var weather1 = document.querySelector('.weather1');
var temp1 = document.querySelector('.temp1');
var date2 = document.querySelector('.date2');
var weather2 = document.querySelector('.weather2');
var temp2 = document.querySelector('.temp2');
var date3 = document.querySelector('.date3');
var weather3 = document.querySelector('.weather3');
var temp3 = document.querySelector('.temp3');
var humid = document.querySelector('.humid');
var wind = document.querySelector('.wind');
var visability = document.querySelector('.visability')
var icon = document.querySelector('.icon');
var savedCity = document.querySelector('.savedCity');

// localStorage.setItem("savedCity", "fayetteville");
// console.log(localStorage);
// console.log(localStorage.getItem("savedCity"));
document.addEventListener("DOMContentLoaded", function(){
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=6ba9c7b56220b9534a05654f858b3639')
    .then(response => response.json())
    .then(data => {
        
        var cityValue = data['city']['name'];
        var value = inputValue.value;
        // value.push(inputValue.value);
        var dateValue = data['list']['0']['dt_txt'];
        var tempValue = data['list']['0']['main']['temp'];
        var weatherValue = data['list']['0']['weather']['0']['description'];
        var humidValue = data['list']['0']['main']['humidity'];
        var windValue = data['list']['0']['wind']['speed'];
        var visabilityValue = data['list']['0']['visibility']
        var dateValue0 = data['list']['7']['dt_txt'];
        var tempValue0 = data['list']['7']['main']['temp'];
        var weatherValue0 = data['list']['7']['weather']['0']['description'];
        var dateValue1 = data['list']['15']['dt_txt'];
        var tempValue1 = data['list']['15']['main']['temp'];
        var weatherValue1 = data['list']['15']['weather']['0']['description'];
        var dateValue2 = data['list']['23']['dt_txt'];
        var tempValue2 = data['list']['23']['main']['temp'];
        var weatherValue2 = data['list']['23']['weather']['0']['description'];
        var dateValue3 = data['list']['31']['dt_txt'];
        var tempValue3 = data['list']['31']['main']['temp'];
        var weatherValue3 = data['list']['31']['weather']['0']['description'];
        var iconValue = `https://openweathermap.org/img/wn/${ data.list[0].weather[0].icon }.png`;
        
        console.log(value);
        localStorage.setItem("savedCity", JSON.stringify(value));
        // local.reload();

        city.innerHTML = cityValue;
        date.innerHTML = `Date: ${dateValue}`;
        temp.innerHTML = 'Tempature in Kelvin: '+ tempValue;
        weather.innerHTML = 'Forecast: '+ weatherValue;
        date0.innerHTML = `Date: ${dateValue0}`;
        temp0.innerHTML = 'Tempature in Kelvin: '+ tempValue0;
        weather0.innerHTML = 'Forecast: '+ weatherValue0;
        date1.innerHTML = `Date: ${dateValue1}`;
        temp1.innerHTML = 'Tempature in Kelvin: '+ tempValue1;
        weather1.innerHTML = 'Forecast: '+ weatherValue1;
        date2.innerHTML = `Date: ${dateValue2}`;
        temp2.innerHTML = 'Tempature in Kelvin: '+ tempValue2;
        weather2.innerHTML= 'Forecast: '+ weatherValue2;
        date3.innerHTML = `Date: ${dateValue3}`;
        temp3.innerHTML = 'Tempature in Kelvin: '+ tempValue3;
        weather3.innerHTML = 'Forecast: '+ weatherValue3;
        humid.innerHTML = 'Humidity: '+ humidValue;
        wind.innerHTML = 'Wind Speed: '+ windValue;
        visability.innerHTML = 'Visability: '+ visabilityValue;
        icon.src = iconValue;
        const oldSearch = JSON.parse(localStorage.getItem("savedCity"));
        savedCity.innerHTML = `Last Search: ${oldSearch}<br />`;
    })
})
})