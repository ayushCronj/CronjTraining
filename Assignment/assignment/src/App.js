import React from 'react';
import './App.css';
import { Button, Input, Radio, Form } from 'antd';
import Display from './Display.js'; 

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      searchreports: [],
      filterreports: [],
      sortreports: [],
      searchclicked: false,
      filterclicked: false,
      sortclicked: false,
      recentsearch: [],
      filterdateclicked: false,
      sortdisplay: false,
      filterdisplay: false,
      recentclicked: false,
      searchdisplay: false,
      filterdatedisplay: false,
    };
  }

  sort = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "CostAsc" || e.target.value === "CostDesc") {
      fetch('http://localhost:3005/api/reportsort/' + e.target.value)
        .then(response => response.json())
        .then(sortreports => this.setState({
          sortreports: sortreports,
          sortclicked: true
        }));
    }
    else if (e.target.value === "DateAsc" || e.target.value === "DateDesc") {
      const items = [...this.state.reports];
      function compare(a, b) {
        let aDate = a.publishedDate;
        let dateParts = aDate.split("/");
        let aDateFinal = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

        let bDate = b.publishedDate;
        let dateParts1 = bDate.split("/");
        let bDateFinal = new Date(+dateParts1[2], dateParts1[1] - 1, +dateParts1[0]);

        let comparison = 0;
        if (aDateFinal > bDateFinal) {
          comparison = 1;
        } else if (aDateFinal < bDateFinal) {
          comparison = -1;
        }
        return comparison;
      }
      items.sort(compare);
      if (e.target.value === "DateDesc") {
        items.reverse();
      }
      this.setState({
        sortreports: items,
        sortclicked: true
      });
    }
  }

  recent = (e) => {
    fetch('http://localhost:3005/api/recentsearch')
      .then(response => response.json())
      .then(recentsearch => this.setState({
        recentsearch: recentsearch,
        recentclicked: !this.state.recentclicked
      })
      )
  }

  search1 = (e) => {
    console.log(e.target.value);
    // this.searchClicked();
    document.getElementById('search').value = e.target.value;
    this.search(e.target.value, 1);
  }

  searchClicked = (e) => {
    fetch('http://localhost:3005/api/recentsearch')
      .then(response => response.json())
      .then(recentsearch => this.setState({
        recentsearch: recentsearch,
        recentclicked: !this.state.recentclicked,
        searchclicked: false,
      searchdisplay: !this.state.searchdisplay,
      searchreports: [],
      })
      )
    // this.setState({
    //   searchclicked: false,
    //   searchdisplay: !this.state.searchdisplay,
    //   searchreports: []
    // })
  }

  filterClicked = (e) => {
    this.setState({
      filterclicked: false,
      filterdisplay: !this.state.filterdisplay,
      filterreports: []
    })
  }

  filterdateClicked = (e) => {
    this.setState({
      filterdateclicked: false,
      filterdatedisplay: !this.state.filterdatedisplay,
      filterreports: []
    })
  }

  sortClicked = (e) => {
    this.setState({
      sortclicked: false,
      sortdisplay: !this.state.sortdisplay,
      sortreports: []
    })
  }

  search = (value, type) => {
    // e.preventDefault();
    console.log(value);
    console.log(type);

    fetch('http://localhost:3005/api/reportsearch/' + value + "/" + type)
      .then(response => response.json())
      .then(searchreports => this.setState({
        searchreports: searchreports,
        searchclicked: true,
      }));
    this.recent();  
  }

  filter = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      fetch('http://localhost:3005/api/reportfilter/' + values.max + "/" + values.min)
        .then(response => response.json())
        .then(filterreports => this.setState({
          filterreports: filterreports,
          filterclicked: true
        }));
    })
  }

  filterdate = (e) => {
    e.preventDefault();
    console.log(new Date(e.target.elements.max.value));
    function datechange(date) {
      let aDate = date;
      let dateParts = aDate.split("/");
      let aDateFinal = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
      return aDateFinal;
    }
    this.props.form.validateFields((err, values) => {
    let maxFinal = Date.parse(values.max);
    let minFinal = Date.parse(values.min);
    let items = [...this.state.reports];
    let newArray = items.filter(item => (
      Date.parse(datechange(item.publishedDate)) >= minFinal && Date.parse(datechange(item.publishedDate)) <= maxFinal));
    this.setState({
      filterreports: newArray,
      filterdateclicked: true
    });
  })
  }

  componentDidMount() {
    fetch("http://localhost:3005/api/reports")
      .then(response => response.json())
      .then(reports => this.setState({ reports: reports }));
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Search } = Input;
    return (
      <div className="App">
        <br />
        <br />
        <h2> Options </h2>
        <Button type="primary" size="large" onClick={this.sortClicked}> Sort </Button>
        <span style={{ visibility: "hidden" }}> S </span>
        <Button type="primary" size="large" onClick={this.searchClicked}> Search By Title/Description </Button>
        <span style={{ visibility: "hidden" }}> S </span>
        {/* <Button type="primary" size="large" onClick={this.recent}> Recent Searches </Button>
        <span style={{ visibility: "hidden" }}> S </span> */}
        <Button type="primary" size="large" onClick={this.filterClicked}> Filter by Cost </Button>
        <span style={{ visibility: "hidden" }}> S </span>
        <Button type="primary" size="large" onClick={this.filterdateClicked}> Filter by Date </Button>
        {this.state.sortdisplay === true ?
          <div className="thing">
            <br />
            <br />
            <div className="Radio">
              <br />
              <b>Sort By :</b> <span style={{ visibility: "hidden" }}> S </span>
              <Radio.Group onChange={this.sort}>
                <Radio value="CostAsc">Cost Ascending</Radio>
                <Radio value="CostDesc">Cost Descending</Radio>
                <Radio value="DateAsc">Date Ascending</Radio>
                <Radio value="DateDesc">Date Descending</Radio>
              </Radio.Group>
              <br />
              <br />
            </div>
            <br />
            <br />
            {this.state.sortreports.length > 0 ?
              <div> <h2> Sorted List </h2>
                <div id="main">

                  {this.state.sortreports.map((report, index) => (
                    <div className="inside">
                      <Display reports={report} index={index} />
                    </div>
                  ))}
                </div>
              </div> : null}
          </div>
          : null}

        
        {this.state.searchdisplay === true ?
          <div>
            <br />
            <br />
            <Search
              placeholder="Enter Search Text"
              id="search"
              onSearch={value => this.search(value, 0)}
              style={{ width: 200 }}
            />
            <br />
            <br />
            {(this.state.recentsearch.length > 0) ?
          <div>
            <b>Recent: </b>
            {this.state.recentsearch.map((item, index) => (
                  <Button size="small" onClick={this.search1} value={item.key}>{item.key}</Button>
              ))}
            {/* <table>
              <tr>
                <th> Query</th>
                <th> Action </th>
              </tr>
              {this.state.recentsearch.map((item, index) => (
                <tr>
                  <td> {item.key} </td>
                  <td> <Button type="primary" onClick={this.search1} value={item.key}>Search Again</Button> </td>
                </tr>
              ))}
            </table> */}
          </div> : null}
            <br />
            {this.state.searchreports.length > 0 ?
              <div> <h2> Searched List </h2>
                <div id="main">

                  {this.state.searchreports.map((report, index) => (
                    <div className="inside">
                      <Display reports={report} index={index} />
                    </div>
                  ))}
                </div>
              </div> : null}
          </div>
          : null}

{/* // {(this.state.recentsearch.length > 0 && this.state.recentclicked === true) ? */}
{/* //           <div>
//             <br />
//             <br />
//             <b>The Recent Searches are: </b>
//             <table>
//               <tr>
//                 <th> Query</th>
//                 <th> Action </th>
//               </tr> */}
{/* //               {this.state.recentsearch.map((item, index) => ( */}
{/* //                 <tr>
//                   <td> {item.key} </td>
//                   <td> <Button type="primary" onClick={this.search1} value={item.key}>Search Again</Button> </td>
//                 </tr>
//               ))}
//             </table> */}
{/* //             <br />
//             <br />
//           </div> : null} */}
        
        {this.state.filterdisplay === true ?
          <div>
            <br />
            <br />
            <Form {...formItemLayout} onSubmit={this.filter}>
              <Form.Item label="Min Value:">
                {getFieldDecorator('min', {
                  rules: [{ required: true }]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Max Value:">
                {getFieldDecorator('max', {
                  rules: [{ required: true }]
                })(<Input />)}
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Filter
          </Button>
            </Form>
            <br />
            <br />
            {/* <h2> Filtered List </h2> */}
            {this.state.filterreports.length > 0 ?
              <div> <h2> Filtered List </h2>
                <div id="main">
                  {this.state.filterreports.map((report, index) => (
                    <div className="inside">
                      <Display reports={report} index={index} />
                    </div>
                  ))}
                </div>
              </div> : null}
          </div>
          : null}

        
        {this.state.filterdatedisplay === true ?
          <div>
            <br />
            <br />
            {/* <form onSubmit={this.filterdate}>
              <Input id="min" type="date" placeholder="Min value" />
              <span style={{ visibility: "hidden" }}> SOME </span>
              <Input id="max" type="date" placeholder="Max value" />
              <span style={{ visibility: "hidden" }}> SOME </span>
              <br />
              <Button> Filter </Button>
            </form> */}
            <Form {...formItemLayout} onSubmit={this.filterdate}>
              <Form.Item label="Min Value:">
                {getFieldDecorator('min', {
                  rules: [{ required: true }]
                   })(<Input type="date" />)}
              </Form.Item>
              <Form.Item label="Max Value:">
                {getFieldDecorator('max', {
                  rules: [{ required: true }]
                   })(<Input type="date" />)}
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Filter
          </Button>
              </Form>
            <br />
            <br />
            {/* <h2> Filtered List </h2> */}
            {this.state.filterreports.length > 0 ?
              <div> <h2> Filtered List </h2>
                <div id="main">
                  {this.state.filterreports.map((report, index) => (
                    <div className="inside">
                      <Display reports={report} index={index} />
                    </div>
                  ))}
                </div>
              </div> : null}
          </div>
          : null}


        {(this.state.searchclicked === false && this.state.filterclicked === false && this.state.sortclicked === false && this.state.filterdateclicked === false) ?
          <div>
            <br />
            <br />
            {/* <h2> List </h2> */}
            <div id="main">
              {this.state.reports.map((report, index) => (
                <div className="inside">
                  <Display reports={report} index={index} />
                </div>
              ))}
            </div>
          </div>
          : null}
      </div>
    );
  }
}

export default Form.create()(App);
