import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }
  add() {
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState({ count: this.state.count + 1 });
  }
  subtract() {
    // this.setState((prevState) => ({ count: prevState.count - 1 }));
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <div> {
          (this.state.count >= 10 || this.state.count <= 0) ?
            ((this.state.count >= 10) ?
              <p><button onClick={this.subtract}>-</button> </p> :
              <p><button onClick={this.add}>+</button> </p>) :
            <p><button onClick={this.add}>+</button> <button onClick={this.subtract}>-</button> </p>
        } </div>
        <p> {this.state.count} </p>
      </div>
    );
  }
}

export default App;
