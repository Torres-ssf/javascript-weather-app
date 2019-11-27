import WeatherUtils from '../../utilities/WeatherUtils';

const DomManipul = (() => {
  const container = document.getElementById('container');
  const loaderContainer = document.getElementById('loader-container');

  const form = document.getElementById('form');
  const submitButton = document.getElementById('form-submit');
  const weatherInput = document.getElementById('weather-input');

  const sandwButton = document.getElementById('sandw');
  sandwButton.onclick = (e) => {
    e.target.classList.toggle('sand-disapear');
    weatherInput.classList.toggle('input-appear');
    submitButton.classList.toggle('appear-submit');
  };

  const time = document.getElementById('time');

  const date = document.getElementById('date');
  date.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-from-sky') {
      date.classList.remove('animate-from-sky');
    }
  });

  const cityName = document.getElementById('city-name');
  cityName.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-from-sky') {
      cityName.classList.remove('animate-from-sky');
    }
  });

  const descriptionTag = document.getElementById('w-description');
  descriptionTag.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-from-sky') {
      descriptionTag.classList.remove('animate-from-sky');
    }
  });

  const mainIcon = document.getElementById('main-icon');
  mainIcon.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-from-position') {
      mainIcon.classList.remove('animate-forecast');
    }
  });

  const tempTag = document.getElementById('temp');
  tempTag.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-from-position') {
      tempTag.classList.remove('animate-forecast');
    }
  });

  const foreList = document.getElementById('fore-list');
  const listArr = Array.from(foreList.children);
  listArr.forEach((elem) => {
    elem.addEventListener('animationend', (event) => {
      if (event.animationName === 'appear-from-position') {
        elem.classList.remove('animate-forecast');
      }
    });
  });

  const onSubmitForm = (callback) => {
    form.onsubmit = callback;
  };

  const toggleLoaderContainer = () => {
    loaderContainer.classList.toggle('invisible');
  };

  const toggleWeatherAnimation = () => {
    date.classList.add('animate-from-sky');
    cityName.classList.add('animate-from-sky');
    descriptionTag.classList.add('animate-from-sky');
    mainIcon.classList.add('animate-forecast');
    tempTag.classList.add('animate-forecast');
  };

  const toggleForecastAnimation = () => {
    let delay = 0;
    listArr.forEach((elem) => {
      elem.classList.add('animate-forecast');
      elem.style.animationDelay = `${delay}ms`;
      delay += 200;
    });
  };

  const wInputValue = () => weatherInput.value;

  const setWeather = (weatherObj, requestType) => {
    time.innerText = WeatherUtils.getFriendlyTime();
    date.innerText = WeatherUtils.getFriendlyDate();

    let city;
    let description;
    let id;
    let temp;
    let iconPath;

    switch (requestType) {
      case 'weather': {
        ({
          city,
          description,
          id,
          temp,
        } = weatherObj);

        container.style.background = WeatherUtils.getContGrad(id, temp);

        cityName.innerHTML = city;

        descriptionTag.innerText = WeatherUtils.capitalize(description);

        iconPath = WeatherUtils.getIconUrl(id)
        mainIcon.style.background = `${iconPath} no-repeat 50% 50%`;
        mainIcon.style.backgroundSize = '168px 168px';

        tempTag.innerHTML = WeatherUtils.processTemp(temp);
        break;
      }

      case 'forecast': {
        const { weatherArr } = weatherObj;
        const forecastList = foreList.children;

        weatherArr.forEach((e, index) => {
          ({
            temp,
            id,
          } = e);

          const { dtTxt } = e;

          iconPath = WeatherUtils.getIconUrl(id, dtTxt);

          const currentItem = forecastList[index];

          currentItem.children[0].innerHTML = WeatherUtils.friendForeTime(dtTxt);
          currentItem.children[1].style.background = `${iconPath} no-repeat 50% 50%`;
          currentItem.children[1].style.backgroundSize = '42px 42px';
          currentItem.children[2].innerHTML = WeatherUtils.processTemp(temp);
        });
        break;
      }
      default:
    }
  };

  const setErrorMessage = () => {
    alert('Invalid input, please try a valid one!');
  };

  return {
    onSubmitForm,
    toggleLoaderContainer,
    wInputValue,
    setWeather,
    setErrorMessage,
    toggleForecastAnimation,
    toggleWeatherAnimation,
  };
})();

export default DomManipul;
