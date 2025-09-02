
const button = document.querySelector('button');
button.addEventListener('click',(event)=>{
    event.preventDefault();
    const element = document.getElementById('city').value;
    function Update(data)
    {

        // temperature
         const weatherinfo = document.getElementById('temp-celsius');
         weatherinfo.innerHTML = data.current.temp_c;
         
        // weather 
         const weather  = document.getElementById('weather');
         weather.innerHTML = data.current.condition.text;

         // Location 
         const Location  = document.getElementById('Location');
         Location.innerHTML = `${data.location.name},${data.location.region},${data.location.country}`;

         // weather-icon
         const weather_icon  = document.getElementById('weather-icon');
         weather_icon.src = data.current.condition.icon;

         // wind-speed
         const wind_speed  = document.getElementById('wind-speed');
         wind_speed.innerHTML = data.current.wind_kph;

         // humidity 
         const humidity  = document.getElementById('humidity');
         humidity.innerHTML = data.current.humidity;
    }


const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=96c25612e1534369976122856252801&q=${element}&aqi=yes`);


promise
.then(response=>response.json())
.then(data=>Update(data))
})