import GetWeather from './components/GetWeather/GetWeather';
import DomManipul from './components/Dom/Dom';

const result = GetWeather.fetchWeather('forecast', 'Sweden');

result.then(data => {
  console.log(data);
  DomManipul.setWeather(data);
});

// DomManipul.onSubmitForm((e) => {
//   e.preventDefault();
//   console.log(DomManipul.wInputValue());
//   const result = GetWeather.fetchWeather('weather', DomManipul.wInputValue());
//   result.then(data => {
//     console.log('finaly');
//     DomManipul.setWeather(data);
//   });
// });