import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./shared/Header";
import {RentalList} from "./component/rental/RentalList";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <div className="container">
        <RentalList/>
      </div>
      </div>
    );
  }
}

export default App;
