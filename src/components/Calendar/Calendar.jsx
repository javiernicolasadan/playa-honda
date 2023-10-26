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

  const priceCalculator = () => {
    // Here we can change the price of each weekday (Sun-Thurs) or weekend day (Fri-Satur).
    const priceWeekday = 40
    const priceWeedend = 60
    let totalPrice = 0
    let currentDate = new Date(startDate)
    
    while (currentDate <= endDate) {
      if (currentDate.getDay() > 0 && currentDate.getDay() < 5) {
       totalPrice += priceWeekday;
      } else {
        totalPrice += priceWeedend;
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    setPrice(totalPrice)
    
  }


  registerLocale("es", es);

 
  return (
    <React.Fragment >
    <h3 style={{ marginTop: "10rem" }} className="d-flex justify-content-center align-items-center">Elige las fechas para consultar precio y disponibilidad</h3>
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
    {availability && <h3 style={{ marginTop: "3rem" }} className="d-flex justify-content-center align-items-center">Según las fechas el precio sería de: {`${price}`} €</h3>}
    
    </React.Fragment>
  );
}
 
export default Calendar;