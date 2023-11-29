import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import { addDays, addMonths } from "date-fns"
import es from "../../locales/es";
import reservations from "./reservations";


const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notAvailability, setNotAvailability] = useState(false)
  const [availability, setAvailability] = useState(false)
  const [price, setPrice] = useState()
  
  const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
  };

  useEffect(() => {
    setNotAvailability(false)
    setAvailability(false)
    if (startDate && endDate) {
      availableDays();
      priceCalculator()
    }
  }, [startDate, endDate]);

  const areDatesEqual = (date1, date2) => {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
  }

  const availableDays = () => {
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        if (reservations.some(reservationDate => areDatesEqual(reservationDate, currentDate))) {
          setNotAvailability(true);
          return
        }
      currentDate.setDate(currentDate.getDate() + 1); 
      }
      setAvailability(true)
    }
  //check if dates are high season(june, july, august, september, december) o or low season
  const highSeason = (date) => {
    const month = date.getMonth()
    const highSeasonMonths = [5,6,7,8,11]
    return highSeasonMonths.includes(month)
  }

  //Calculate price
  const priceCalculator = () => {
    // Here we can change the price of each weekday (Sun-Thurs) or weekend day (Fri-Satur).
    const priceWeekdayLowSeason = 40
    const priceWeekendLowSeason = 60
    const priceWeekdayHighSeason = 60
    const priceWeekendHighSeason = 80
    let totalPrice = 0
    let currentDate = new Date(startDate)
    
    while (currentDate <= endDate) {
      if (currentDate.getDay() > 0 && currentDate.getDay() < 5 && highSeason(currentDate)) {
       totalPrice += priceWeekdayHighSeason;
      } else if (currentDate.getDay() > 4 &&  highSeason(currentDate)){
        totalPrice += priceWeekendHighSeason;
      } else if (currentDate.getDay() > 0 && currentDate.getDay() < 5){
        totalPrice += priceWeekdayLowSeason;
      } else if (currentDate.getDay() > 4){
        totalPrice += priceWeekendLowSeason;
      }
      
      currentDate.setDate(currentDate.getDate() + 1)
    }
    setPrice(totalPrice)
    
  }
  //To convert date to readable date for customer
  const convertDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const formatedDate = `${day}/${month}/${year}`;
      return formatedDate
  }

  registerLocale("es", es);

 
  return (
    <React.Fragment >
    <h3 style={{ marginTop: "10rem" }} className="chooseDate d-flex justify-content-center text-center align-items-center">Elige las fechas para consultar precio y disponibilidad</h3>
    <div style={{ marginTop: "3rem" }} className="d-flex justify-content-center align-items-center">
    {/* Type of calendar from ractdatepicker: Date range for one datepicker with disabled dates highlighted */}
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={addDays(new Date(), 1)}
        maxDate={addMonths(new Date(), 12)}
        excludeDates={[...reservations]}
        selectsRange
        inline
        locale="es"
        >
        <div style={{ color: "red" }} >
          {notAvailability && <p>Fechas no disponibles, elige otras fechas.</p>}
        </div>
        </DatePicker>
    </div>
      {availability && <h3 style={{ marginTop: "3rem" }} className="chooseDate d-flex justify-content-center text-center align-items-center">Según las fechas el precio sería de: {`${price}`} €</h3>}
      {startDate && <h5 style={{ marginTop: "3rem" }} className=" d-flex justify-content-center align-items-center">Fecha de entrada: {`${convertDate(startDate)}`}</h5>}
      {endDate && <h5 style={{ marginTop: "1rem" }} className="d-flex justify-content-center align-items-center">Fecha de salida: {`${convertDate(endDate)}`}</h5>}
    </React.Fragment>
  );
}
 
export default Calendar;