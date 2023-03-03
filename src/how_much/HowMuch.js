import React from 'react';
import "./howMuch.css";

function HowMuch() {
  return (
<div class="body">
      <div class="until">
        <h1 class="until_numeric">000</h1>
        <div class="until_date">31 december 2023</div>
        <div class="user_input">
          <form action="input_date">
            <input type="text" id="pay-day-input" placeholder='pay day:' name="input_pay_day"  /><br /><br />
          </form>
          <button class="button">Enter</button>
          <button class="see_more">See More</button>
        </div >
      </div>
    </div>
  );
}
export default HowMuch;