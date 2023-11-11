import { useEffect, useState } from "react"

const Weather = () => {
    const [description, setDescription] = useState();
    const [main, setMain] = useState();
    const [temp, setTemp] = useState();

    const fetchWeather = async () => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=&units=metric&lang=es")
            if(response.status === 200) {
                const parsed = await response.json() 
                setDescription(parsed.weather[0].description)
                setMain(parsed.weather[0].main)
                setTemp(parsed.main.temp)
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
        <h5>El tiempo hoy en Playa Honda:</h5>
        {main}<br/>
        {description}<br/>
        {temp} ºG<br/>
        </div>
        
    </>  );
}
 
export default Weather;