import GetWeather from './components/GetWeather/GetWeather';
import DomManipul from './components/Dom/Dom';

const curWeatherProm = GetWeather.fetchWeather('weather', 'California');
const forecastProm = GetWeather.fetchWeather('forecast', 'California');

DomManipul.toggleLoaderContainer();

curWeatherProm.then((data) => {
  // DomManipul.setWeather(data, 'weather');
  // DomManipul.toggleLoaderContainer();
  // DomManipul.toggleWeatherAnimation();
});

forecastProm.then((data) => {
  // DomManipul.setWeather(data, 'forecast');
  // DomManipul.toggleForecastAnimation();
})

DomManipul.onSubmitForm((e) => {
  e.preventDefault();
  DomManipul.toggleLoaderContainer();
  const weather = GetWeather.fetchWeather('weather', DomManipul.wInputValue());
  const forecast = GetWeather.fetchWeather('forecast', DomManipul.wInputValue());

  weather.then((data) => {
    // DomManipul.setWeather(data, 'weather');
    // DomManipul.toggleLoaderContainer();
    // DomManipul.toggleWeatherAnimation();
  });

  forecast.then((data) => {
    // DomManipul.setWeather(data, 'forecast');
    // DomManipul.toggleForecastAnimation();
  }).catch((e) => {
    // DomManipul.setErrorMessage();
    // DomManipul.toggleLoaderContainer();
  });
});
