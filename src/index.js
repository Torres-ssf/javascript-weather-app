import GetWeather from './components/GetWeather/GetWeather';
import Dom from './components/Dom/Dom';
import './scss/main.scss';

const initFetch = (cityName) => {
  Dom.toggleLoaderContainer();
  const weather = GetWeather.fetchWeather('weather', cityName);
  const forecast = GetWeather.fetchWeather('forecast', cityName);

  weather.then((data) => {
    Dom.setWeather(data, 'weather');
    Dom.toggleLoaderContainer();
    Dom.toggleWeatherAnimation();
  });

  forecast.then((data) => {
    Dom.setWeather(data, 'forecast');
    Dom.toggleForecastAnimation();
  }).catch(() => {
    Dom.setErrorMessage();
    Dom.toggleLoaderContainer();
  });
};

Dom.onSubmitForm((e) => {
  e.preventDefault();
  const cityName = Dom.wInputValue();
  initFetch(cityName);
});

initFetch('California');
