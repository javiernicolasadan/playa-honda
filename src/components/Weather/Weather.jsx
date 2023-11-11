import { useEffect } from "react"

const Weather = () => {

    const fetchWeather = async () => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=-0.84&appid=")
            if(response.status === 200) {
                const parsed = await response.json() 
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
        <p>weather</p>
        <p>weather</p>
        <p>weather</p>
        <p>weather</p>
        <p>weather</p>
        <p>weather</p>
    </>  );
}
 
export default Weather;