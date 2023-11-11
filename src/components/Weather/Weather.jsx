import { useEffect, useState } from "react"


const Weather = () => {
    console.log(process.env)
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
                
             console.log(parsed)
            }
               
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchWeather()
    },[])

    return ( 
    <>

        <div style={{ marginTop: "10rem" }} className="text-center">
        <h5>El tiempo hoy en Playa Honda:</h5><br/>
        
        {description}<br/>
        {temp} ºG<br/>
        <h7>{tempMin} ºG min - {tempMax} ºG max</h7><br/>
        {humidity}%- humedad<br/>
        {speedWind} m/s
        </div>
        
    </>  );
}
 
export default Weather;