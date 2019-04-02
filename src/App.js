import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items';

class App extends Component {
  
  state = {
    Objs: [
      {Id: 100, Role:"Manager", Dept: "Finance", Age: 30},
      {Id: 101, Role:"HR", Dept: "Finance", Age: 33},
      {Id: 202, Role:"Production Manager", Dept: "Operation", Age: 44},
      {Id: 303, Role:"Solution Architect", Dept: "IT", Age: 37},
    ]
  };
  
  render() {
    return (
      <div className="App">
        <h1>To-Dos</h1>
        <Items items = {this.state.Objs}/>
      </div>
    );
  }
}

export default App;
