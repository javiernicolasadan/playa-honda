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
    <div className="d-flex justify-content-center align-items-center">
        <div style={{ marginTop: "10rem",  }} >

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
    </div>
    </React.Fragment>
  );
}
 
export default Calendar;