import { useEffect, useState } from "react";

const Weather = () => {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [tempMax, setTempMax] = useState();
  const [tempMin, setTempMin] = useState();
  const [humidity, setHumidity] = useState();
  const [speedWind, setSpeedWind] = useState();

  //here we manage the api call to get the weather, using a .env variable to hide the api personal password
  //and render the info in the component if everything its ok
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=es`
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
    fetchWeather();
  }, []);

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
          <h5 style={{ fontWeight: "bold" }}>El tiempo hoy en Playa Honda:</h5>
          <div className="d-flex flex-column align-items-center">
            <p className="mb-0">{description}</p>
            <p className="mb-0">{temp} ºG</p>
            <p className="mb-0">
              {tempMin} ºG min - {tempMax} ºG max
            </p>
            <p className="mb-0">{humidity}%- humedad</p>
            <p className="mb-0">{speedWind} m/s - viento</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;