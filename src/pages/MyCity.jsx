import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weatherApi';

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Konotop').then(setWeather);
  }, []);

  return (
    <div>
      <h1>Моє місто — Конотоп</h1>
      <p>
        Коното́п — місто в Україні, центр Конотопського району Сумської області.
        Розташований на річці Єзуч,притоці Сейму. Населення — 68 тис. осіб (2025).
      </p>
      <p>
        Відоме завдяки Конотопській битві 1659 року та повісті «Конотопська відьма».
      </p>

      <h2>Погода</h2>
      {weather ? (
        <div>
          <p>Температура: {weather.temp}°C</p>
          <p>Опис: {weather.description}</p>
          <p>Координати: [{weather.lat}, {weather.lon}]</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
};

export default MyCity;
