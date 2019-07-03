import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class List1 extends Component {
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      myArray: [0]
    };
    this.add = this.add.bind(this);
  }
  add() {
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState({ count: this.state.count + 1 });
    this.setState({
      myArray: [...this.state.myArray, this.state.count +1 ]
    })
  }
  render() {
    return (
      <div>
        <p><button onClick={this.add}> + </button> </p>
        <p>{this.state.count} </p>
        {console.log(this.state.myArray)}
        {this.state.myArray.map(item => <List1 key={item} value={item} />)}
      </div>
    );
  }
}

export default App;
