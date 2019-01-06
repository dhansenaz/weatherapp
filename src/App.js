import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


const API_KEY = "d19a9d4be1cbfbe7877fd4ef80a854c7";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)

  }
  render() {
    return (
      <div className="App">
        <div>
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
