import wUtils from '../../utilities/WeatherUtils';

const DomManipul = (() => {
  const container = document.getElementById('container');
  // const form = document.getElementById('form');

  // const weatherInput = document.getElementById('weather-input');
  const time = document.getElementById('time');
  const date = document.getElementById('date');
  const cityName = document.getElementById('city-name');
  const descriptionTag = document.getElementById('w-description');
  const mainIcon = document.getElementById('main-icon');
  const tempTag = document.getElementById('temp');
  const foreList = document.getElementById('fore-list');

  // const onSubmitForm = (callback) => {
  //   form.onsubmit = callback;
  // };

  // const wInputValue = () => weatherInput.value;

  const setWeather = (weatherObj) => {

    time.innerText = wUtils.getFriendlyTime();
    date.innerText = wUtils.getFriendlyDate();

    const { city, weatherArr } = weatherObj;
    const forecastList = foreList.children;

    cityName.innerText = city;

    weatherArr.map((e, index) => {
      const { temp, description, dt_txt, id } = e;
      const backGroundStyle = `${wUtils.getIconUrl(id, dt_txt)} no-repeat 50% 50%`;

      if (index == 0) {
        container.style.background = wUtils.getContGrad(id, temp, dt_txt);
        descriptionTag.innerText = wUtils.capitalize(description);
        mainIcon.style.background = backGroundStyle;
        mainIcon.style.backgroundSize = '168px 168px';
        tempTag.innerHTML = wUtils.processTemp(temp);
      }
      const currentItem = forecastList[index];

      currentItem.children[0].innerHTML = wUtils.friendForeTime(dt_txt);
      currentItem.children[1].style.background = backGroundStyle;
      currentItem.children[1].style.backgroundSize = '42px 42px';
      currentItem.children[2].innerHTML = wUtils.processTemp(temp);
    });
  }

  return {
    // onSubmitForm,
    // wInputValue,
    setWeather,
  };
})();

export default DomManipul;