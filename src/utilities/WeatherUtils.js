import clear from '../assets/clear.svg';
import clearNight from '../assets/clear-night.svg';
import clouds from '../assets/clouds.svg';
import cloudsNight from '../assets/clouds-night.svg';
import drizzle from '../assets/drizzle.svg';
import rain from '../assets/rain.svg';
import thunderstorm from '../assets/thunderstorm.svg';
import snow from '../assets/snow.svg';
import mist from '../assets/mist.svg';

const WeatherUtils = (() => {
  const CLEAR_HOT_DAY_COLORS = ['#ebb382', '#d05375'];
  const CLEAR_COOL_DAY_COLORS = ['#C5D382', '#628A4B'];
  const CLEAR_NIGHT_COLORS = ['#215A6E', '#031425'];
  const RAIN_COLORS = ['#6FAAD0', '#485188'];
  const SNOW_COLORS = ['#FFFFFF', '#C5C2CD'];
  const FOG_COLORS = ['#C2C9D3', '#596369'];

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const generateGradient = (color1, color2) => `linear-gradient(145deg, ${color1} 20%, ${color2} 80%)`;

  const friendForeTime = (time) => {
    const timeArr = time.split(' ')[1];
    return timeArr.substring(0, 5);
  };

  const getFriendlyDate = () => {
    const [weekDay, month, day] = [...new Date().toString().split(' ')];
    return `${weekDay}, ${day} ${month}`;
  };

  const getFriendlyTime = () => {
    const [, , , , time] = [...new Date().toString().split(' ')];
    return time.slice(0, 5);
  };

  const celsiusToFahrenheit = temp => ((temp * 9 / 5) + 32);

  const fahrenheitToCelsius = temp => (5 * (temp - 32)) / 9;

  const formatTemp = (temp, celsius) => {
    const sym = celsius ? '&#8451;' : '&#8457;';
    return `${Math.round(temp)}${sym}`;
  };

  const convertTemp = (temp, celsius) => {
    if (celsius) {
      temp = fahrenheitToCelsius(temp);
    } else {
      temp = celsiusToFahrenheit(temp);
    }

    return formatTemp(temp, celsius);
  };

  const processTemp = (temp, celsius) => {
    if (celsius) return formatTemp(temp, celsius);
    return convertTemp(temp, celsius);
  };

  const decipherID = (id, sunUp) => {
    if (id < 233) {
      return 'thunderstorm';
    } if (id < 322) {
      return 'drizzle';
    } if (id < 532) {
      return 'rain';
    } if (id < 623) {
      return 'snow';
    } if (id < 782) {
      return 'mist';
    } if (id === 800) {
      return sunUp ? 'clear' : 'clear-night';
    }
    return sunUp ? 'clouds' : 'clouds-night';
  };

  const isSunUp = (dt) => {
    const hour = dt === undefined ? new Date().getHours()
      : parseInt(dt.split(' ')[1], 10);
    return hour >= 6 && hour < 19;
  };

  const getContGrad = (id, temp, dt) => {
    const condition = decipherID(id, isSunUp(dt));

    let colorsArr = [];

    if (condition === 'clear' || condition === 'clouds') {
      colorsArr = temp > 26 ? CLEAR_HOT_DAY_COLORS
        : CLEAR_COOL_DAY_COLORS;
    } else if (condition === 'clear-night' || condition === 'clouds-night') {
      colorsArr = CLEAR_NIGHT_COLORS;
    } else if (condition === 'thunderstorm' || condition === 'drizzle' || condition === 'rain') {
      colorsArr = RAIN_COLORS;
    } else if (condition === 'snow') {
      colorsArr = SNOW_COLORS;
    } else if (condition === 'mist') {
      colorsArr = FOG_COLORS;
    }

    return generateGradient(colorsArr[0], colorsArr[1]);
  };

  const getIconUrl = (id, dt) => {
    const condition = decipherID(id, isSunUp(dt));
    let conditionPath;

    switch (condition) {
      case 'clear':
        conditionPath = clear;
        break;

      case 'clear-night':
        conditionPath = clearNight;
        break;

      case 'clouds':
        conditionPath = clouds;
        break;

      case 'clouds-night':
        conditionPath = cloudsNight;
        break;

      case 'drizzle':
        conditionPath = drizzle;
        break;

      case 'rain':
        conditionPath = rain;
        break;

      case 'thunderstorm':
        conditionPath = thunderstorm;
        break;

      case 'snow':
        conditionPath = snow;
        break;

      default:
        conditionPath = mist;
    }

    return `url(${conditionPath})`;
  };

  return {
    processTemp,
    convertTemp,
    friendForeTime,
    capitalize,
    getIconUrl,
    getContGrad,
    getFriendlyDate,
    getFriendlyTime,
  };
})();

export default WeatherUtils;
