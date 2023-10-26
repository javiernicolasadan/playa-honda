import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import { addDays, addMonths } from "date-fns"
import es from "../../locales/es";
import reservations from "./reservations";


const Calendar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [notAvailability, setNotAvailability] = useState(false)

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
  };
  useEffect(() => {
    if (startDate && endDate) {
      availableDays();
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
      setNotAvailability(false)

      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        if (reservations.some(reservationDate => areDatesEqual(reservationDate, currentDate))) {
          setNotAvailability(true);
          return
        }
      currentDate.setDate(currentDate.getDate() + 1); 
      }
    }

  registerLocale("es", es);

  console.log("fecha inicio", startDate)
  console.log("fecha fin", endDate)
  

  return (
    <React.Fragment >
    <h3 style={{ marginTop: "8rem" }} className="d-flex justify-content-center align-items-center">Elige las fechas para consultar precio y disponibilidad</h3>
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
    </React.Fragment>
  );
}
 
export default Calendar;