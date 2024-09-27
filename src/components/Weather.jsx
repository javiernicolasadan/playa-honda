import { useEffect, useState } from "react";
import { getTranslation } from "../services/localizationservice";
import Chart from "chart.js/auto";

const Weather = ({ language, onLanguageChange }) => {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [tempMax, setTempMax] = useState();
  const [tempMin, setTempMin] = useState();
  const [humidity, setHumidity] = useState();
  const [speedWind, setSpeedWind] = useState();

  const staticTemperatureData = {
    daytimeTemp: [
      15.6, 16.1, 17.4, 19, 22.1, 26, 29.3, 29.5, 27.2, 23.8, 19.4, 17.1,
    ], // Max temps for each month
    nighttimeTemp: [
      11.5, 12, 12.9, 14.7, 17.9, 21.6, 24.5, 25.3, 23.5, 20.1, 15.5, 13.3,
    ], // Min temps for each month
  };
  const sunnyDaysData = [19, 17, 18, 18, 25, 26, 28, 26, 22, 21, 19, 19]; // Sunny days
  const cloudyDaysData = [7, 8, 7, 7, 5, 4, 5, 6, 6, 8, 8, 8]; // Cloudy days
  const overcastDaysData = [4, 3, 3, 5, 2, 3, 4, 3, 6, 3, 5, 5];

  useEffect(() => {
    const canvasTemp = document.getElementById("staticWeatherChart");
    const ctxTemp = canvasTemp.getContext("2d");

    const canvasWeather = document.getElementById("weatherDaysChart");
    const ctxWeather = canvasWeather.getContext("2d");

    const resizeCanvas = () => {
      canvasTemp.width = window.innerWidth * 0.8;
      canvasTemp.height = canvasTemp.width * 0.6;

      canvasWeather.width = window.innerWidth * 0.8;
      canvasWeather.height = canvasWeather.width * 0.6;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    // Render the chart using static data
    const tempChart = new Chart(ctxTemp, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Average Daytime Temperature(ºC)",
            data: staticTemperatureData.daytimeTemp, // Static max temperature data
            backgroundColor: "rgba(255, 99, 132, 0.5)", // Soft red color
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            borderRadius: 5,
          },
          {
            label: "Average NightTime Temperature(ºC)",
            data: staticTemperatureData.nighttimeTemp, // Static min temperature data
            backgroundColor: "rgba(54, 162, 235, 0.5)", // Soft blue color
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
            text: "Monthly Temperature Data", // Title text
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
    

    const weatherDaysChart = new Chart(ctxWeather, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Sunny Days",
            data: sunnyDaysData,
            backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue
          },
          {
            label: "Cloudy Days",
            data: cloudyDaysData,
            backgroundColor: "rgba(99, 132, 255, 0.6)", // Grey
          },
          {
            label: "Overcast Days",
            data: overcastDaysData,
            backgroundColor: "rgba(75, 192, 192, 0.6)", // Teal
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
            text: "Days of Sunshine, Cloudiness, and Overcast (AROUND 270 SUNNY DAYS PER YEAR)",
          },
        },
      },
    });

    // Clean up the chart instance to prevent memory leaks when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      tempChart.destroy();
      weatherDaysChart.destroy();
    };
  }, []); // Empty dependency array to run the effect once when the component mounts

  //here we manage the api call to get the weather, using a .env variable to hide the api personal password
  //and render the info in the component if everything its ok
  const fetchWeatherEs = async () => {
    try {
      const response = await fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=es`
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=es`
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
      console.log(error);
    }
  };

  const fetchWeatherEn = async () => {
    try {
      const response = await fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=en`
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=en`
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
      console.log(error);
    }
  };
  const fetchWeatherFr = async () => {
    try {
      const response = await fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=en`
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr`
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
      console.log(error);
    }
  };
  const fetchWeatherNl = async () => {
    try {
      const response = await fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=en`
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=nl`
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
      console.log(error);
    }
  };
  const fetchWeatherDe = async () => {
    try {
      const response = await fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=en`
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=de`
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
      console.log(error);
    }
  };
  const fetchWeatherPt = async () => {
    try {
      const response = await fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=en`
        `https://backend-playa-honda.vercel.app/api/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=pt`
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
      console.log(error);
    }
  };
  useEffect(() => {
    language === "es" && fetchWeatherEs();
    language === "en" && fetchWeatherEn();
    language === "fr" && fetchWeatherFr();
    language === "nl" && fetchWeatherNl();
    language === "de" && fetchWeatherDe();
    language === "pt" && fetchWeatherPt();
  }, [language]);

  //In case we want to add polution info from the API
  /* const fetchPolution = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}`)
            if(response.status === 200) {
                const parsed = await response.json()
                console.log(parsed.list[0])
            }
        } catch (error) {
           console.log(error) 
        }
    } */

  /* useEffect(() => {
        fetchPolution()
    },[]) */

  return (
    <>
      <div className="text-center weather">
        <div
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
              {humidity}%- {getTranslation("weather.humidity", language)}
            </p>
            <p className="mb-0">
              {speedWind} m/s - {getTranslation("weather.speedWind", language)}
            </p>
          </div>
        </div>
        <div style={{ width: "80%", height: "40%" }}>
          <canvas
            id="staticWeatherChart"
            style={{ width: "100%", height: "100%" }}
          ></canvas>
        </div>
        <div style={{ width: "80%",height: "25%" }}>
          <canvas
            id="weatherDaysChart"
            style={{ width: "100%", height: "50%" }}
          ></canvas>
        </div>
      </div>
    </>
  );
};

export default Weather;
