import React, { Component } from "react";
import Users from "./Users.js";
import { connect } from "react-redux";
import { getuser } from './actions';

const mapStateToProps = state => {
  return { users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    getuser: () => dispatch(getuser())
  };
}

class App1 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //   };
  //   this.deleteUser = this.deleteUser.bind(this);
  //   this.updateUser = this.updateUser.bind(this);
  // }

  componentDidMount() {
    this.props.getuser();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //  .then(response => response.json())
    //  .then(result => {
    //         this.props.updateList(result)
    //         // console.log(this.state.items)
    //     })
  }


  // deleteUser(index) {
  //   let users = this.state.users;
  //   users.splice(index, 1);
  //   this.setState({
  //     users: users,
  //   });
  // }

  // updateUser(index, data) {
  //   let users = this.state.users;
  //   users[index].name = data.name;
  //   users[index].email = data.email;
  //   users[index].phone = data.phone;
  //   users[index].website = data.website;
  //   this.setState({
  //     users: users,
  //   });
  // };

  render() {
    return (
      <div id="main">
        {this.props.users.map((user, index) => (
          <div className="inside">
            <Users user={user} index={index} />
          </div>
        ))}
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(App1);
//index={index} deleteUser={this.deleteUser} updateUser={this.updateUser}
export default App;
