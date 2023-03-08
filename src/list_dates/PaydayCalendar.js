import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./listDates.css";
import { Link } from 'react-router-dom';


function PaydayCalendar() {
  const [payDay, setPayDay] = useState('');
  const [paydayDates, setPaydayDates] = useState([]);

  useEffect(() => {
    if (payDay) {
      axios.get(`http://localhost:8080/till-sallary/pay-day/${payDay}/list-dates`)
        .then(response => setPaydayDates(response.data.next_pay_days))
        .catch(error => {
          if (error.response && error.response.status === 404) {
            setPaydayDates([]);
            alert("Invalid input. Please enter a day between 1 and 31.");
            document.getElementById('pay-day-input').value = ''; // clear input value
          } else {
            console.error(error);
          }
        });
    }
  }, [payDay]);

  function handleSubmit(event) {
    event.preventDefault();
    const payDayInput = document.getElementById('pay-day-input').value;
    setPayDay(payDayInput);
    document.getElementById('pay-day-input').value = ''; // clear input value
  }

  return (
    <div className="content">
      <div className="calendarbox">
        <table>
          <thead>
            <tr>
              <th>Next Pay Day</th>
              <th>Days Left</th>
            </tr>
          </thead>
          <tbody>
            {paydayDates.map((date) => (
              <tr key={date.next_pay_day}>
                <td>{date.next_pay_day}</td>
                <td>{date.days_left}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <input type="text" id="pay-day-input" placeholder='pay day:' name="input_pay_day" /><br /><br />
          <button className="button" type="submit">Enter</button>
        </form>
        <Link to="/">
        <button className="back">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default PaydayCalendar;
