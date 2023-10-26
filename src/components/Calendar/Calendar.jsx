import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import { addDays, addMonths } from "date-fns"
import es from "../../locales/es";
import reservations from "./reservations";


const Calendar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
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
        />
    </div>
    </React.Fragment>
  );
}
 
export default Calendar;