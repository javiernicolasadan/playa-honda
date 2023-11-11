const Weather = () => {
    
    const fetchData = () => {
        try {
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Playa Honda,30385&limit=5&appid=${process.env.OPENWEATHERMAP_API_KEY}`)
            .then(response => {
               return response.json() 
            })
            .then((data) => {
                console.log(data)
            })
            
        } catch (error) {
            console.log(error)
        }
        
    
    return ( 
        <>
            <p>weather</p>
            <p>weather</p>
            <p>weather</p>
            <p>weather</p>
            <p>weather</p>
        </>
     );
}
}
export default Weather;