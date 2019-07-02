import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component{
	  constructor(props){
        super(props)
        this.state = {
            num: 0
        }
      this.sum = this.sum.bind(this);
      this.minus = this.minus.bind(this);
    }
    sum() {
      // this.setState((prevState) => ({ num: prevState.num + 1 }));
      this.setState({num: this.state.num + 1});
    }
    minus() {
      // this.setState((prevState) => ({ num: prevState.num - 1 }));
      this.setState({num: this.state.num - 1});
    }
    render() {
      return (
        <div>
        <div> {
            (this.state.num >= 10 || this.state.num <= 0) ? 
              ((this.state.num>=10) ? 
              <p><button onClick={this.minus}>-</button> </p>: 
              <p><button onClick={this.sum}>+</button> </p>)  : 
            <p><button onClick={this.sum}>+</button> <button onClick={this.minus}>-</button> </p> 
        } </div>
        

	      <p> {this.state.num} </p>
        </div>
      );
    }
}

export default App;
