import { useEffect, useState } from "react"


const Weather = () => {
    const [description, setDescription] = useState();
    const [temp, setTemp] = useState();
    const [tempMax, setTempMax] = useState();
    const [tempMin, setTempMin] = useState();
    const [humidity, setHumidity] = useState();
    const [speedWind, setSpeedWind] = useState();

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=es`)
            if(response.status === 200) {
                const parsed = await response.json() 
                setDescription(parsed.weather[0].description)
                setTemp(parsed.main.temp)
                setTempMax(parsed.main.temp_max)
                setTempMin(parsed.main.temp_min)
                setHumidity(parsed.main.humidity)
                setSpeedWind(parsed.wind.speed)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
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

    useEffect(() => {
        fetchWeather()
    },[])

    /* useEffect(() => {
        fetchPolution()
    },[]) */

    return ( 
    <>

        <div style={{ marginTop: "10rem" }} className="text-center weather" >
            <div className="weather-text">
            <h5>El tiempo hoy en Playa Honda:</h5>
            {description}<br/>
            {temp} ºG<br/>
            {tempMin} ºG min - {tempMax} ºG max<br/>
            {humidity}%- humedad<br/>
            {speedWind} m/s
            </div>
        </div>

        
        
    </>  );
}
 
export default Weather;