import React, { useState } from 'react';
import axios from 'axios';
import './howMuch.css';

function getData(payDay) {
  return axios.get(`http://localhost:8080/till-sallary/how-much?pay_day=${payDay}`)
    .then(response => response.data)
    .catch(error => console.error(error));
}

function HowMuch() {
  const [data, setData] = useState({
    next_pay_day: '',
    days_left: ''
  });
  
  function handleSubmit(event) {
    event.preventDefault();
    const payDay = document.getElementById('pay-day-input').value;
    getData(payDay)
      .then(response => {
        setData({
          next_pay_day: response.next_pay_day,
          days_left: response.days_left
        });
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="body">
      <div className="until">
        <h1 className="until_numeric">{data.days_left}</h1>
        <div className="until_date">{data.next_pay_day}</div>
        <div className="user_input">
          <form onSubmit={handleSubmit}>
            <input type="text" id="pay-day-input" placeholder='pay day:' name="input_pay_day" /><br /><br />
            <button className="button" type="submit">Enter</button>
          </form>
          <button className="see_more">See More</button>
        </div >
      </div>
    </div>
  );
}

export default HowMuch;