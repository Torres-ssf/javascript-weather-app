import GetWeather from './components/GetWeather'


const result = GetWeather.fetchWeather('weather', 'Boston');

result.then(data => {
    console.log(data);
});

const form = document.getElementById('form');
form.onsubmit = (e) => {
    e.preventDefault();
    const value = document.getElementById('weather-input').value;
    GetWeather.fetchWeather('weather', value).then(data => console.log(data))
}
console.log(form);



