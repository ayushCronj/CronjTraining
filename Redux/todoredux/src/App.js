import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Display from './Display';
// import Filter1 from './Filter1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      // myArray: [],
      filterarray: [],
      flag: true,
      sortorderclicked: false,
      sortclicked: false
    }
    this.submit = this.submit.bind(this);
    this.sortpriority = this.sortpriority.bind(this);
    this.sorttime = this.sorttime.bind(this);
    this.sortstatus = this.sortstatus.bind(this);
    this.sortorder = this.sortorder.bind(this);
    this.filtercomplete = this.filtercomplete.bind(this);
    this.filterincomplete = this.filterincomplete.bind(this);
    this.mark = this.mark.bind(this);
    this.showall = this.showall.bind(this);
    this.remove = this.remove.bind(this);
  }

  // _onButtonClick() {
  //   this.setState({
  //     showComponent: true,
  //   });
  // }

  submit(name, priority, time) {
    this.setState(
      {
        todo: [...this.state.todo, { name: name, priority: priority, time: time, status: "Incomplete" }],
        // myArray: [...this.state.myArray, { name: name, priority: priority, time: time, status: status }]
      }
    )
  }

  mark(index) {
    const items = this.state.todo;
    items[index].status = "Completed";
    this.setState({ todo: items });
  }

  remove(index) {
    const todo = this.state.todo;
    todo.splice(index, 1);
    this.setState({
      todo: todo,
    })
  }

  sortpriority() {

    const items = this.state.todo;
    // const prop = this.state.priorityClicked;
    function compare(a, b) {
      const priorityA = parseInt(a.priority, 10);
      const priorityB = parseInt(b.priority, 10);

      let comparison = 0;
      if (priorityA > priorityB) {
        comparison = 1;
      } else if (priorityA < priorityB) {
        comparison = -1;
      }
      return comparison;
    }
    items.sort(compare);
    // if (prop === true)
    //   items.reverse();
    this.setState({
      todo: items,
      // priorityClicked: !this.state.priorityClicked,
      sortclicked: true
    });
  }

  sorttime() {
    const items = this.state.todo;
    items.sort(function (a, b) {
      // return new Date('2019/01/01 ' + a.time) - new Date('2019/01/01 ' + b.time);
      return new Date(a.time) - new Date(b.time);
    });
    // if (this.state.timeClicked === true)
    //   items.reverse();
    this.setState({
      todo: items,
      // timeClicked: !this.state.timeClicked,
      sortclicked: true
    });
  }

  sortstatus() {
    const items = this.state.todo;
    function compare(a, b) {
      const statusA = a.status;
      const statusB = b.status;

      let comparison = 0;
      if (statusA > statusB) {
        comparison = 1;
      } else if (statusA < statusB) {
        comparison = -1;
      }
      return comparison;
    }
    items.sort(compare);
    // if (this.state.statusClicked === true)
    //   items.reverse();
    this.setState({
      todo: items,
      // statusClicked: !this.state.statusClicked,
      sortclicked: true
    });
  }

  sortorder() {
    const items = this.state.todo;
    items.reverse();
    this.setState({
      todo: items,
      // sortorderclicked: !this.state.sortorderclicked
    });
  }

  filtercomplete() {
    const items = this.state.todo;
    const item = items.filter(function (number) {
      return number.status === "Completed";
    }
    );
    this.setState({
      filterarray: item,
      flag: false
    });
  }

  filterincomplete() {
    const items = this.state.todo;
    const item = items.filter(function (number) {
      return number.status === "Incomplete";
    }
    );
    this.setState({
      filterarray: item,
      flag: false
    });
  }

  showall() {
    this.setState({
      flag: true,
      sortclicked: false
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.sortclicked === true ?
          <div>
            <Todo submit={this.submit} />
            <br />
            <br />
            <button onClick={this.sortpriority}> Sort by Priority</button>
            <button onClick={this.sorttime}> Sort by Time</button>
            <button onClick={this.sortstatus}> Sort by Status</button>
            <br />
            <button onClick={this.sortorder}> Toggle Sort Order </button>
            <button onClick={this.showall}> Go Back </button>
            {/* <button onClick={this.filtercomplete}> Filter Completed</button>
        <button onClick={this.filterincomplete}> Filter Incompleted</button> */}
            <br />
            <br />
            <table id="table1">
              <tbody>
                <tr>
                  <th> Name </th>
                  <th> Priority </th>
                  <th> Time </th>
                  <th> Status </th>
                  {/* <th> Mark As Completed</th>
                  <th> Delete </th> */}
                </tr>
                {this.state.todo.map((item, index) => <tr className={item.status == "Completed" ? "complete": null}key={index}> <td>{item.name} </td>
                  <td> {item.priority}</td>
                  <td>{item.time}</td>
                  <td>{item.status}</td>
                  {/* <td><button onClick={() => this.mark(index)}>Mark as Completed</button></td>
                  <td><button onClick={() => this.remove(index)}>Delete</button></td> */}
                </tr>)}
              </tbody>
            </table>    </div>
          : null
        }

        {this.state.flag === false ?
          <div id="filterdiv">
            <br />
            <br />
            <button onClick={this.filtercomplete}> Filter Completed </button>
            <button onClick={this.filterincomplete}> Filter Incompleted </button>
            <button onClick={this.showall}> Show All </button>
            <br />
            <br />
            <table id="table2">
              <tbody>
                <tr>
                  <th> Name </th>
                  <th> Priority </th>
                  <th> Time </th>
                  <th> Status </th>
                </tr>
                <Display array={this.state.filterarray} />
              </tbody>
            </table>
          </div> : null

        }

        {this.state.flag === true && this.state.sortclicked === false ?
          <div>
            <Todo submit={this.submit} />
            <br />
            <br />
            <button onClick={this.sortpriority}> Sort by Priority</button>
            <button onClick={this.sorttime}> Sort by Time</button>
            <button onClick={this.sortstatus}> Sort by Status</button>
            <button onClick={this.filtercomplete}> Filter Completed</button>
            <button onClick={this.filterincomplete}> Filter Incompleted</button>
            <br />
            <br />
            <table id="table1">
              <tbody>
                <tr>
                  <th> Name </th>
                  <th> Priority </th>
                  <th> Time </th>
                  <th> Status </th>
                  <th> Mark As Completed</th>
                  <th> Delete </th>
                </tr>
                {this.state.todo.map((item, index) => <tr className={item.status == "Completed" ? "complete": null} key={index}> <td>{item.name} </td>
                  <td> {item.priority}</td>
                  <td>{item.time}</td>
                  <td>{item.status}</td>
                  <td><button onClick={() => this.mark(index)}>Mark as Completed</button></td>
                  <td><button onClick={() => this.remove(index)}>Delete</button></td>
                </tr>)}
              </tbody>
            </table>    </div> : null
        }

      </div>
    );
  }
}

export default App;
