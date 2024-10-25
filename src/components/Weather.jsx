import { useEffect, useState, lazy, Suspense } from "react";
import { getTranslation } from "../services/localizationservice";

// Lazy loading de Chart.js
const Chart = lazy(() => import("chart.js/auto"));

const Weather = ({ language }) => {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [tempMax, setTempMax] = useState();
  const [tempMin, setTempMin] = useState();
  const [humidity, setHumidity] = useState();
  const [speedWind, setSpeedWind] = useState();

  const staticTemperatureData = {
    daytimeTemp: [
      15.6, 16.1, 17.4, 19, 22.1, 26, 29.3, 29.5, 27.2, 23.8, 19.4, 17.1,
    ],
    nighttimeTemp: [
      11.5, 12, 12.9, 14.7, 17.9, 21.6, 24.5, 25.3, 23.5, 20.1, 15.5, 13.3,
    ],
  };
  const sunnyDaysData = [19, 17, 18, 18, 25, 26, 28, 26, 22, 21, 19, 19];
  const cloudyDaysData = [7, 8, 7, 7, 5, 4, 5, 6, 6, 8, 8, 8];
  const overcastDaysData = [4, 3, 3, 5, 2, 3, 4, 3, 6, 3, 5, 5];

  const getTranslatedMonths = () => [
    getTranslation("weather.jan", language),
    getTranslation("weather.feb", language),
    getTranslation("weather.mar", language),
    getTranslation("weather.apr", language),
    getTranslation("weather.may", language),
    getTranslation("weather.jun", language),
    getTranslation("weather.jul", language),
    getTranslation("weather.aug", language),
    getTranslation("weather.sep", language),
    getTranslation("weather.oct", language),
    getTranslation("weather.nov", language),
    getTranslation("weather.dec", language),
  ];

  // Lógica de renderizado de los gráficos
  useEffect(() => {
    let tempChart = null;
    let weatherDaysChart = null;
    const renderCharts = async () => {
      const canvasTemp = document.getElementById("staticWeatherChart");
      const ctxTemp = canvasTemp.getContext("2d");
      const canvasWeather = document.getElementById("weatherDaysChart");
      const ctxWeather = canvasWeather.getContext("2d");

      const translatedMonths = getTranslatedMonths();
      const { Chart } = await import("chart.js/auto");

      // Destruir los gráficos previos antes de crear nuevos para evitar errores
      if (window.tempChart && typeof window.tempChart.destroy === 'function') {
        window.tempChart.destroy(); 
      }
      if (window.weatherDaysChart && typeof window.weatherDaysChart.destroy === 'function') {
        window.weatherDaysChart.destroy(); 
      }

      window.tempChart = new Chart(ctxTemp, {
        type: "bar",
        data: {
          labels: translatedMonths,
          datasets: [
            {
              label: getTranslation("weather.daytimeTempLabel", language),
              data: staticTemperatureData.daytimeTemp,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              borderRadius: 5,
            },
            {
              label: getTranslation("weather.nighttimeTempLabel", language),
              data: staticTemperatureData.nighttimeTemp,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
              borderRadius: 5,
            },
          ],
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true, // Show the title
            text: getTranslation("weather.tempChartTitle", language), // Title text
            font: {
              size: 24, // Set the font size for the title
            },
            padding: {
              top: 10, // Adjust padding from top
              bottom: 30, // Adjust padding from bottom
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
      });

      window.weatherDaysChart = new Chart(ctxWeather, {
        type: "bar",
        data: {
          labels: translatedMonths,
          datasets: [
            {
              label: getTranslation("weather.sunnyDaysLabel", language),
              data: sunnyDaysData,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
              label: getTranslation("weather.cloudyDaysLabel", language),
              data: cloudyDaysData,
              backgroundColor: "rgba(99, 132, 255, 0.6)",
            },
            {
              label: getTranslation("weather.overcastDaysLabel", language),
              data: overcastDaysData,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: getTranslation("weather.weatherDaysChartTitle", language),
          },
        },
      },
      });
    };

    renderCharts();

    return () => {
      // Destruir los gráficos al desmontar el componente para evitar fugas de memoria
      if (tempChart) tempChart.destroy();
      if (weatherDaysChart) weatherDaysChart.destroy();
    };
  }, [language]);

  // Lógica para fetch del clima desde la API
  const fetchWeather = async (lang) => {
    try {
      const response = await fetch(
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=${lang}`
      );
      if (response.status === 200) {
        const parsed = await response.json();
        setDescription(parsed.weather[0].description);
        setTemp(parsed.main.temp);
        setTempMax(parsed.main.temp_max);
        setTempMin(parsed.main.temp_min);
        setHumidity(parsed.main.humidity);
        setSpeedWind(parsed.wind.speed);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(language);
  }, [language]);

  return (
    <section className="text-center weather">
      <section
        className="weather-text overflow-auto weather-info"
        style={{ minHeight: "100px", maxHeight: "300px" }}
      >
        <h5 style={{ fontWeight: "bold" }}>
          {getTranslation("weather.weatherToday", language)}
        </h5>
        <div className="d-flex flex-column align-items-center">
          <p className="mb-0">{description}</p>
          <p className="mb-0">{temp} ºG</p>
          <p className="mb-0">
            {tempMin} ºG min - {tempMax} ºG max
          </p>
          <p className="mb-0">
            {humidity}% - {getTranslation("weather.humidity", language)}
          </p>
          <p className="mb-0">
            {speedWind} m/s - {getTranslation("weather.speedWind", language)}
          </p>
        </div>
      </section>

      {/* Usando Suspense para Lazy Load de Chart.js */}
      <Suspense fallback={<div>Loading chart...</div>}>
        <aside style={{ width: "80%", height: "35%" }}>
          <canvas
            id="staticWeatherChart"
            style={{ width: "100%", height: "100%" }}
          ></canvas>
        </aside>
        <aside style={{ width: "80%", height: "25%" }}>
          <canvas
            id="weatherDaysChart"
            style={{ width: "100%", height: "50%" }}
          ></canvas>
        </aside>
      </Suspense>
    </section>
  );
};

export default Weather;
