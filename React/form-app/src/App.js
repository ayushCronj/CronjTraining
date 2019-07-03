import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './form'

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
        NAME : <label> {this.state.name}</label>
        <br />
        AGE : <label> {this.state.age}</label>
      </div>
    );
  }
}

export default App;
