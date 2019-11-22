import GetWeather from './components/GetWeather'


const result = GetWeather.fetchWeather('weather', 'Boston');

result.then(data => {
    console.log(data);
}); 

console.log(result);



