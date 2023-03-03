import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import format from "date-fns/format";
import "react-calendar/dist/Calendar.css";
import "./listDates.css";
function PaydayCalendar() {
  const [paydays, setPaydays] = useState([]);

  useEffect(() => {
    // Fetch the paydays from the API endpoint
    fetch("https://example.com/paydays")
      .then((response) => response.json())
      .then((data) => setPaydays(data.next_pay_days));
  }, []);

  // Transform the paydays data into an array of Date objects
  const paydayDates = paydays.map((payday) => new Date(payday.next_pay_day));

  // Render the calendar view with the paydays highlighted
  return (
  <div className="content">
    <div className="calendarbox">
    <Calendar className="custom-calendar" // add a custom class to the component
    tileContent={({ date, view }) => {
        // Highlight the paydays in the month view
        if (view === "month" && paydayDates.includes(date)) {
          return <div className="payday-marker">{format(date, "d")}</div>;
        }
      }}
    />
     <form action="input_date">
     <input type="text" id="pay-day-input" placeholder='pay day:' name="input_pay_day"  /><br /><br />
          </form>
          <button class="button">Enter</button>
    </div>
    </div>
  );
}

export default PaydayCalendar;
