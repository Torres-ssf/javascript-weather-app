//'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}'

const DataFetcher = async (dataType, cityName) => {

  const DefaultURL = 'http://api.openweathermap.org/data/2.5/';

  const API_KEY = '5ca8840c0dee5c8795633cf806e88dfc'

  const request = `${DefaultURL}${dataType}?q=${cityName}&APPID=${API_KEY}`;

  try {
    const response = await fetch(request, { mode: 'cors' });

    if (response.ok) {
      return await response.json()
    }
  } catch (e) {
    console.log(e);
  }
}

export default DataFetcher;