import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './App';
import './index.css';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickme: false
    }
    this.todo = this.todo.bind(this);
  }

  todo() {
    this.setState(
      { clickme: true }
    )
  }
  render() {
    return (
      <div>
        {this.state.clickme == false ? <button id="enter" onClick={this.todo}> Click Me to Enter To-Do List </button> : null}
        {this.state.clickme == true ? <App /> : null}

      </div>
    );
  }
}
ReactDOM.render(
  <Start />,
  document.getElementById('root')
);
