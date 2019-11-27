const WeatherUtils = (() => {
  const CLEAR_HOT_DAY_COLORS = ['#ebb382', '#d05375'];
  const CLEAR_COOL_DAY_COLORS = ['#C5D382', '#628A4B'];
  const CLEAR_NIGHT_COLORS = ['#215A6E', '#031425'];
  const RAIN_COLORS = ['#6FAAD0', '#485188'];
  const SNOW_COLORS = ['#FFFFFF', '#C5C2CD'];
  const FOG_COLORS = ['#C2C9D3', '#596369'];

  const roundTemp = temp => Math.round(temp);

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

  const processTemp = temp => `${roundTemp(temp)}&deg`;

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
      : parseInt(dt.split(' ')[1].substring(0, 2), 6);

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
    return `url(../assets/weatherIcons/${condition}.svg)`;
  };

  return {
    processTemp,
    friendForeTime,
    capitalize,
    getIconUrl,
    getContGrad,
    getFriendlyDate,
    getFriendlyTime,
  };
})();

export default WeatherUtils;
