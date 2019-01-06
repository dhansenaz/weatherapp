import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


const API_KEY = 'db9471f2904cfbfc8bd11afc9540dece';

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault()
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&=${API_KEY}&units=metric`);
    const data = await api_call.json();

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
