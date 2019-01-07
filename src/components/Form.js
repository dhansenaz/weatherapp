import React from "react";

const Form = props => (
  <form className="form-wrapper" onSubmit={props.getWeather}>
    <div class="input-box">
      <input id="list" name="city" required type="text" placeholder="City" />
    </div>
    <div>
      <input
        id="list"
        name="country"
        required
        type="text"
        placeholder="Country"
      />
    </div>
    <div>
      <button>Get Weather</button>
    </div>
  </form>
);

export default Form;
