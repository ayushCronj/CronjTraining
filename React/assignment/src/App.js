import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import { Button, Icon, Upload } from 'antd';
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

import { ExcelRenderer } from 'react-excel-renderer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false,
      rows: null,
      cols: null
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  fileHandler = (event) => {
    let file = event.target.files[0];
    let user = [...this.state.users];

    ExcelRenderer(file, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(file);
        if (file.name.split('.').pop() === "xlsx") {
          console.log("Hi");
          let arr = [];
          resp.rows.forEach((value, i) => {
            if (i >= 1) {
              let obj = {
                id: value[0],
                name: value[1],
                username: value[2],
                email: value[3],
                // "address.street": value[4],
                // "address.suite": value[5],
                // "address.city": value[6],
                // "address.zipcode": value[7],
                // "address.geo.lat": value[8],
                // "address.geo.lng": value[9],
                phone: value[4],
                website: value[5],
                // "company.name": value[12],
                // "company.catchPhrase": value[13],
                // "company.bs": value[14],
              }
              arr.push(obj);
            }
          })

          this.setState({
            loaded: true,
            cols: resp.cols,
            rows: resp.rows,
            users: [...this.state.users, ...arr],
          });
        }
        else {
          console.log("not a xlsx");
          alert("Please Upload only xlsx files");
        }
      }
    });
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
    var obj = [];
    var object1;
    const array1 = this.state.users.map((user, index) => {
      object1 = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        // street: user.address.street || user.street,
        // suite: user.address.suite, 
        // city: user.address.city ,
        // zipcode: user.address.zipcode, 
        // lat: user.address.geo.lat ,
        // lng: user.address.geo.lng,
        phone: user.phone,
        website: user.website,
        //     companyname: user.company.name,
        // catchphrase: user.company.catchPhrase,
        // bs: user.company.bs,
      };
      obj = [...obj, object1];
    })
    return (
      <div>
        <div>
          {console.log(this.state.users)}
          <ExcelFile element={<Button type="primary"><Icon type="export" /></Button>}>
            <ExcelSheet data={obj} name="Users">
              <ExcelColumn label="ID" value="id" />
              <ExcelColumn label="Name" value="name" />
              <ExcelColumn label="User Name" value="username" />
              <ExcelColumn label="Email" value="email" />
              {/* <ExcelColumn label="Street" value="street" />
<ExcelColumn label="Suite" value="suite" />
<ExcelColumn label="City" value="city" />
<ExcelColumn label="ZipCode" value="zipcode" />
<ExcelColumn label="Latitude" value="lat" />
<ExcelColumn label="Longitude" value="lng" /> */}
              <ExcelColumn label="Phone" value="phone" />
              <ExcelColumn label="Website" value="website" />
              {/* <ExcelColumn label="Company Name" value="companyname" />
<ExcelColumn label="Catch Phrase" value="catchphrase" />
<ExcelColumn label="BS" value="bs" /> */}
            </ExcelSheet>
          </ExcelFile>
        </div>
        <br />
        <div>
          <b>Import : </b><input type="file" onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
          {/* {this.state.loaded === true ?<div>
          {console.log(this.state.rows)}
            /* <OutTable data={this.state.rows} columns={this.state.cols} tableHeaderRowClass="heading" /> 
          </div>: null} } */}
        </div>
        <br />
        <br />
        <div id="main">
          {this.state.users.map((user, index) => (
            <div className="inside">
              <Users user={user} index={index} deleteUser={this.deleteUser} updateUser={this.updateUser} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
