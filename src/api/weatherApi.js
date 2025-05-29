export const fetchWeather = async () => {
  // Фейкові дані погоди
  const fakeWeatherData = {
    location: { name: "Konotop" },
    current: {
      temp_c: 22,
      condition: { text: "Sunny" },
      wind_kph: 10,
    },
  };
  return fakeWeatherData;
};