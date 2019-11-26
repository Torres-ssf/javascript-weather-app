import WeatherUtils from '../../utilities/WeatherUtils'

const GetWeather = (() => {
  const fetchWeather = async (dataType, cityName) => {

    const request = `${defaultURL}${dataType}?q=${cityName}&APPID=${API_KEY}&units=metric`;

    console.log(request);

    const data = processData(await fetchData(request), 1);

    return data;
  }

  const fetchData = async (request) => {
    try {
      const response = await fetch(request, { mode: 'cors' });

      if (response.ok) {
        return response.json();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const processData = (rustyData, typeOfRequest) => {

    const weatherObj = {};

    console.log(rustyData);

    switch (typeOfRequest) {
      case WeatherUtils.REQUEST_TYPE_FORECAST:

        const city = rustyData['city']['name'];

        weatherObj['city'] = city;

        const forecastArr = [];

        const list = rustyData['list'];

        for (let i = 0; i < 5; i++) {
          const item = list[i];
          const { weather, main, dt_txt } = item;
          const { temp } = main;
          const { id, description } = weather[0];

          forecastArr.push({
            temp,
            dt_txt,
            id,
            description,
          });
        }

        weatherObj['weatherArr'] = forecastArr;
        break;

      default:
        console.log('estoy default');
    }

    return weatherObj;
  }

  const defaultURL = 'http://api.openweathermap.org/data/2.5/';

  const API_KEY = '5ca8840c0dee5c8795633cf806e88dfc';

  return {
    fetchWeather
  };
})();

export default GetWeather;