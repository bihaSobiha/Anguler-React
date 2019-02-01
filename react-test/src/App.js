import React, { Component } from 'react';
import './App.css';
import Test from './component/teat1';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      clicks:0
    }
    this.countClicks=this.countClicks.bind(this)
  }

  countClicks(){
    this.setState({clicks:this.state.clicks+1})
  }
  render(){
    return(
      <div className="App">
        <h1>parent</h1>
        <p>no of clicks:{this.state.clicks}</p>
        <Content1 childClick={this.countClicks}></Content1>
        <Content2 childClick={this.countClicks}></Content2>
      </div>
    )
  }
}

  class Content1 extends Component {
    render(){
      return(
        <div>
          <h3>child1</h3>
          <button onClick={this.props.childClick}>Click</button>
        </div>
      )
    }
  }

  class Content2 extends Component {
    render(){
      return(
        <div>
          <h3>child2</h3>
          <button onClick={this.props.childClick}>Click</button>
        </div>
      )
    }
  }

export default App;
