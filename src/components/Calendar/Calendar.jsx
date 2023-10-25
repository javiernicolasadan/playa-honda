import React, { useState } from "react";
import DatePicker from "react-datepicker"
import { addDays } from "date-fns"
/* import { registerLocale } from "react-datepicker"; */
/* import es from "../../locales/es.js"; */

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
        />
        </div>
    </div>
    </React.Fragment>
  );
}
 
export default Calendar;