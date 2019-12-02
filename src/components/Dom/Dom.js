import WeatherUtils from '../../utilities/WeatherUtils';

const DomManipul = (() => {
  const container = document.getElementById('container');
  const loaderContainer = document.getElementById('loader-container');

  const form = document.getElementById('form');
  const submitButton = document.getElementById('form-submit');
  submitButton.addEventListener('animationend', (event) => {
    if (event.animationName === 'disappear-from-position') {
      submitButton.classList.remove('appear-submit');
      submitButton.classList.remove('disapear-submit');
    }
  });

  const weatherInput = document.getElementById('weather-input');
  weatherInput.addEventListener('animationend', (event) => {
    if (event.animationName === 'hide-from-left') {
      weatherInput.classList.remove('input-appear');
      weatherInput.classList.remove('input-disappear');
    }
  });

  const sandwButton = document.getElementById('sandw');
  sandwButton.addEventListener('animationend', (event) => {
    if (event.animationName === 'unturn') {
      sandwButton.classList.remove('sand-turn');
      sandwButton.classList.remove('sand-turn-back');
    }
  });
  sandwButton.onclick = (e) => {
    const classArr = Array.from(e.target.classList);
    if (classArr.includes('sand-turn')) {
      e.target.classList.add('sand-turn-back');
      weatherInput.classList.add('input-disappear');
      submitButton.classList.add('disapear-submit');
    } else {
      e.target.classList.add('sand-turn');
      weatherInput.classList.add('input-appear');
      submitButton.classList.add('appear-submit');
    }
  };

  const scaleForm = document.getElementById('scale-form');
  scaleForm.addEventListener('input', () => {
    updateTempTags();
  });
  scaleForm.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-without-scale') {
      scaleForm.classList.remove('animate-appear');
    }
    if (event.animationName === 'disappear-without-scale') {
      scaleForm.classList.remove('animate-disappear');
      scaleForm.classList.toggle('invisible');
    }
  });

  const optionButton = document.getElementById('options');
  optionButton.onclick = () => {
    const classList = scaleForm.classList;
    if ([...classList].includes('invisible')) {
      classList.add('animate-appear');
      classList.toggle('invisible');
    } else {
      classList.add('animate-disappear');
    }
  };

  const celsiusRadio = document.getElementById('celsius-radio');
  celsiusRadio.onclick = () => {
    scaleForm.classList.add('animate-disappear');
  };

  const fahrenheitRadio = document.getElementById('fahrenheit-radio');
  fahrenheitRadio.onclick = () => {
    scaleForm.classList.add('animate-disappear');
  };

  const time = document.getElementById('time');
  time.addEventListener('animationend', (event) => {
    if (event.animationName === 'appear-from-sky') {
      time.classList.remove('animate-from-sky');
    }
  });

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
    time.classList.add('animate-from-sky');
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

  const updateTempTags = () => {
    const celsius = celsiusRadio.checked;
    const oldCurTemp = parseInt(tempTag.innerText, 10);
    tempTag.innerHTML = WeatherUtils.convertTemp(oldCurTemp, celsius);

    [...foreList.children].forEach((element) => {
      const tempTag = element.children[2];
      const oldTemp = parseInt(tempTag.innerText, 10);
      tempTag.innerHTML = WeatherUtils.convertTemp(oldTemp, celsius);
    });
  };

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

        iconPath = WeatherUtils.getIconUrl(id);
        mainIcon.style.background = `${iconPath} no-repeat 50% 50%`;
        mainIcon.style.backgroundSize = '168px 168px';

        const processedTemp = WeatherUtils.processTemp(temp, celsiusRadio.checked);
        tempTag.innerHTML = processedTemp;
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
          const processedTemp = WeatherUtils.processTemp(temp, celsiusRadio.checked);
          currentItem.children[2].innerHTML = processedTemp;
        });
        break;
      }
      default:
    }
  };

  const setErrorMessage = () => {
    alert('Invalid input, please try a valid one!'); // eslint-disable-line
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
