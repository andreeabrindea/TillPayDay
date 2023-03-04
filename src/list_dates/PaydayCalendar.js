import React, { useState, useEffect } from "react";
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


  return (
  <div className="content">
    <div className="calendarbox">

    {/* {/* <div style="overflow-x:auto;"> */}
  <table>
  <thead>
    <tr>
      <th>Next Pay Day</th>
      <th>Days Left</th>
    </tr>
  </thead>
  <tbody>
    {/* {paydayDates.map((date) => (
      <tr key={date}>
        <td>{format(date, "dd MMMM, yyyy")}</td>
        <td>{Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24))}</td>
      </tr>
    ))} */}
    <tr>
      <td>15 March, 2023</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
    
     <form action="input_date">
     <input type="text" id="pay-day-input" placeholder='pay day:' name="input_pay_day"  /><br /><br />
          </form>
          <button class="button">Enter</button>
    </div>
    </div>
  );
}

export default PaydayCalendar;
