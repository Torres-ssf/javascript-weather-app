const DomManipul = (() => {
  const form = document.getElementById('form');

  const weatherInput = document.getElementById('weather-input');

  const cityName = document.getElementById('city-name');
  const wDescription = document.getElementById('w-description');
  const tempCur = document.getElementById('temp');
  const tempMin = document.getElementById('temp-min');
  const tempMax = document.getElementById('temp-max');
  

  const onSubmitForm = (callback) => {
    form.onsubmit = callback;
  };

  const wInputValue = () => weatherInput.value;

  const setWeather = (weatherObj) => {
    const { temp, temp_min, temp_max } = weatherObj['main'];
    const { name } = weatherObj;
    const { description } = weatherObj['weather'];

    cityName.innerText = name;
    tempMin.innerText = temp_min;
    tempMax.innerText = temp_max;
    tempCur.innerText = temp;
    wDescription.innerText = description;
  }

  return {
    onSubmitForm,
    wInputValue,
    setWeather,
  };
})();

export default DomManipul;