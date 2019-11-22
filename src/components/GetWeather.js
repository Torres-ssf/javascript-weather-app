const GetWeather = (() => {
  const fetchWeather = async (dataType, cityName) => {

    const request = `${defaultURL}${dataType}?q=${cityName}&APPID=${API_KEY}`;

    const data = processData(await fetchData(request));

    console.log(data);

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

  const processData = (rustyData) => {
    const weather = rustyData['weather'][0];
    return weather;
  }

  const defaultURL = 'http://api.openweathermap.org/data/2.5/';

  const API_KEY = '5ca8840c0dee5c8795633cf806e88dfc';

  return {
    fetchWeather
  };
})();

export default GetWeather;