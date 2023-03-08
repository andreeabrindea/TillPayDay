import React, { useState } from 'react';
import axios from 'axios';
import './howMuch.css';
import { Link } from 'react-router-dom';

function getData(payDay) {
 // https://tillpaydayb.fly.dev/till-sallary/how-much?pay_day=13
  return axios.get(`https://tillpaydayb.fly.dev/till-sallary/how-much?pay_day=${payDay}`)
    .then(response => response.data)
    .catch(error => {
      if (error.response && error.response.status === 404) {
        throw new Error("Invalid input. Please enter a day between 1 and 31.");
      } else {
        console.error(error);
      }
    });
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
        document.getElementById('pay-day-input').value = ''; // clear input value
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  
  return (
    <div className="body">
      <div className="until">
        <h1 className="until_numeric">{data.days_left} days left</h1>
        <div className="until_date">{data.next_pay_day}</div>
        <div className="user_input">
          <form onSubmit={handleSubmit}>
            <input type="text" id="pay-day-input" placeholder='pay day:' name="input_pay_day"  /><br /><br />
            <button className="button" type="submit">Enter</button>
          </form>
          <Link to="/listDates">
          <button className="see_more">See More</button>
          </Link>
        </div >
      </div>
    </div>
  );
}

export default HowMuch;