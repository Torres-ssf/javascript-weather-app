import GetWeather from './components/GetWeather/GetWeather';
import DomManipul from './components/Dom/Dom';

const initFetch = (cityName) => {
  DomManipul.toggleLoaderContainer();
  const weather = GetWeather.fetchWeather('weather', cityName);
  const forecast = GetWeather.fetchWeather('forecast', cityName);

  weather.then((data) => {
    DomManipul.setWeather(data, 'weather');
    DomManipul.toggleLoaderContainer();
    DomManipul.toggleWeatherAnimation();
  });

  forecast.then((data) => {
    DomManipul.setWeather(data, 'forecast');
    DomManipul.toggleForecastAnimation();
  }).catch(() => {
    DomManipul.setErrorMessage();
    DomManipul.toggleLoaderContainer();
  });
};

DomManipul.onSubmitForm((e) => {
  e.preventDefault();
  const cityName = DomManipul.wInputValue();
  initFetch(cityName);
});

initFetch('California');
