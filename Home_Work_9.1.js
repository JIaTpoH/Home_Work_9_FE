function getWeatherDescription(weatherCode, decode) {
  const weatherDescription = decode(weatherCode);
  return `Сейчас погода: ${weatherDescription}`;
}

function decodeWeather(weatherCode) {
  let weatherDescription;
  
  switch (weatherCode) {
    case "SQ":
      weatherDescription = "Шквал";
      break;
    case "PO":
      weatherDescription = "Пыльный вихрь";
      break;
    case "FC":
      weatherDescription = "Торнадо";
      break;
    case "BR":
      weatherDescription = "Дымка (видимость от 1 до 9 км)";
      break;
    case "HZ":
      weatherDescription = "Мгла (видимость менее 10 км)";
      break;
    case "FU":
      weatherDescription = "Дым (видимость менее 10 км)";
      break;
    case "DS":
      weatherDescription = "Пыльная буря (видимость менее 10 км)";
      break;
    case "SS":
      weatherDescription = "Песчаная буря (видимость менее 10 км)";
      break;
    default:
      weatherDescription = "Неизвестная погода";
  }

  return weatherDescription;
}

const weatherCode = "SQ";
const description = getWeatherDescription(weatherCode, decodeWeather);
console.log(description); // Вывод: "Сейчас погода: Шквал"
