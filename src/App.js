import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items';
import AddItem from './AddItem';

class App extends Component {
  
  state = {
    // Objs: [
    //   {Id: 100, Role:"Manager", Dept: "Finance", Age: 30},
    //   {Id: 101, Role:"HR", Dept: "Finance", Age: 33},
    //   {Id: 202, Role:"Production Manager", Dept: "Operation", Age: 44},
    //   {Id: 303, Role:"Solution Architect", Dept: "IT", Age: 37},
    // ]
    Tasks: [
      {Id: 1, task: "New Task 1"},
      {Id: 2, task: "Evening Party"}
    ]
  };
  
  addItem = (task) => {
    task.Id = Math.random();
    let tasks = [...this.state.Tasks, task];
    this.setState({
      Tasks: tasks
    })
  }

  deleteItem = (id) => {
    console.log(id);
    let tasks = this.state.Tasks.filter(item =>{
      return id !== item.Id;
    });

    this.setState({
      Tasks: tasks
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Dos</h1>
        <Items items = {this.state.Tasks} deleteItem = {this.deleteItem}/>
        <AddItem addItem = {this.addItem}/>
      </div>
    );
  }
}

export default App;
