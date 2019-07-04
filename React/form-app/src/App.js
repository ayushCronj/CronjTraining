import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    }
    this.display = this.display.bind(this);
  }
  display(name, age) {
    this.setState(
      {
        name: name,
        age: age
      }
    )
  };
  render() {
    return (
      <div className="App">
        <Form display={this.display} />
        <br />
        <br />
        <div className="Display">
          <br />
          Submitted Name is <label className="Namelabel"> {this.state.name}</label>
          <br />
          <br />
          Submitted Age is <label className="Agelabel"> {this.state.age}</label>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
