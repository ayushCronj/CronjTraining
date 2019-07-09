import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import {Row, Col} from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  deleteUser(index) {
    let users = this.state.users;
    users.splice(index, 1);
    this.setState({
      users: users,
    });
  }

  updateUser(index, data) {
    let users = this.state.users;
    users[index].name = data.name;
    users[index].email = data.email;
    users[index].phone = data.phone;
    users[index].website = data.website;
    this.setState({
      users: users,
    });
  };

  render() {
    return (
      <div id="main">
        {this.state.users.map((user, index) => (
          <div className="inside">
            <Users user={user} index={index} deleteUser={this.deleteUser} updateUser={this.updateUser} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
