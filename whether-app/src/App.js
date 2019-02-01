import React, { Component } from 'react';
import './App.css';
import Title from './component/Title';
import Form from './component/Forms';
import Weather from './component/Weather';


class App extends Component {
  state={
    city:undefined,
    country:undefined,
    temperature:undefined,
    pressure:undefined,
    humidity:undefined
  }
  getWeatherData= async (event) =>{
    alert("from form component");
    event.preventDefault();
        const city=event.target.elements.city.value;
        const country=event.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=446c551d705c3e54fc0e66a75603aaa9&units=metric`);
        const data = await api_call.json();
        console.log(data);

        this.setState({
        city:data.name,
        country:data.sys.country,
        temperature:data.main.temp,
        pressure:data.main.pressure,
        humidity:data.main.humidity
        });
        
  }
  render() {
    return (
      <div className="App">
        <Title></Title>
        <Form abc={this.getWeatherData}></Form>
        <Weather
        city={this.state.city}
        country={this.state.country}
        temperature={this.state.temperature}
        pressure={this.state.pressure}
        humidity={this.state.humidity}
        ></Weather>
      </div>
    );
  }
}

export default App;
