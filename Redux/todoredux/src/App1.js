import React, { Component } from "react";
import List from "./List.js";
import Form from "./Form.js";
import { connect } from "react-redux";
import Filter from "./filter";
import './style.css';

const mapStateToProps = state => {
    return { filterclicked: state.filterclicked };
};

function mapDispatchToProps(dispatch) {
    return {
        sortPriority: index => dispatch({ type: "SORT_PRIORITY", index }),
        sortTime: index => dispatch({ type: "SORT_TIME", index }),
        sortStatus: index => dispatch({ type: "SORT_STATUS", index }),
        sortOrder: index => dispatch({ type: "SORT_ORDER", index }),
        filterComplete: index => dispatch({ type: "FILTER_COMPLETE", index }),
        filterInComplete: index => dispatch({ type: "FILTER_INCOMPLETE", index }),
        removeFilter: index => dispatch({ type: "SHOW_ALL", index })
    };
}

class App2 extends Component {
    render() {
        return (
            <div className="App">
                {this.props.filterclicked === false ?
                    <div>
                        <div>
                            <h2>Add a new todo</h2>
                            <Form />
                        </div>
                        <br />
                        <br />
                        <h2>Options</h2>
                        <button onClick={() => this.props.sortPriority("Sort")}> Sort by Priority</button>
                        <button onClick={() => this.props.sortTime("Sort")}> Sort by Time</button>
                        <button onClick={() => this.props.sortStatus("Sort")}> Sort by Status</button>
                        <button onClick={() => this.props.filterComplete("Filter_c")}> Filter Completed </button>
                        <button onClick={() => this.props.filterInComplete("Filter_inc")}> Filter Incompleted </button>
                        <br />
                        <button onClick={() => this.props.sortOrder("Sort")}> Toggle Order </button>

                        <br />
                        <br />
                        <div>
                            <h2>To-Do list</h2>
                            <List />
                        </div>
                    </div>
                    :
                    <div>

                        <br />
                        <br />
                        <br />
                        <h2>Filter Options</h2>
                        <button onClick={() => this.props.filterComplete("Filter_c")}> Filter Completed </button>
                        <button onClick={() => this.props.filterInComplete("Filter_inc")}> Filter Incompleted </button>
                        <button onClick={() => this.props.removeFilter("Show")}> Remove Filter </button>
                        <div>
                            <h2>Filtered list</h2>
                            <Filter />
                        </div>

                    </div>}
            </div>
        );
    }
}

const App1 = connect(mapStateToProps, mapDispatchToProps)(App2);
export default App1;