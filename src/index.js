import DataFetcher from './components/DataFetcher'

const result = DataFetcher('weather', 'Boston');

result.then(data => console.log(data));


