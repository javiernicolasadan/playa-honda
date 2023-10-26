import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import { addDays } from "date-fns"
import es from "../../locales/es";

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  registerLocale("es", es);

  return (
    <React.Fragment >
    <h3 style={{ marginTop: "8rem" }} className="d-flex justify-content-center align-items-center">Elige las fechas para consultar precio y disponibilidad</h3>
    <div style={{ marginTop: "3rem" }} className="d-flex justify-content-center align-items-center">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        selectsRange
        selectsDisabledDaysInRange
        inline
        locale="es"
        />
    </div>
    </React.Fragment>
  );
}
 
export default Calendar;