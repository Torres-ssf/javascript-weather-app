import GetWeather from './components/GetWeather/GetWeather';// eslint-disable-line
import Dom from './components/Dom/Dom';// eslint-disable-line

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
