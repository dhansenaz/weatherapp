import React from "react";

const Form = props => (
  <form className="form-wrapper"onSubmit={props.getWeather}>
    <div>
      <input type="text" name="city" placeholder="City" />
    </div>
    <div>
      <input type="text" name="country" placeholder="Country" />
    </div>
    <div>
      <button>Get Weather</button>
    </div>
  </form>
);

export default Form;
