import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "./actions";
import {Icon} from "antd";
import './style.css';

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            priority: "",
            time: "",
            status: "Incomplete",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const title = event.target.elements.title.value;
        const priority = event.target.elements.priority.value;
        const time = event.target.elements.time.value;
        const status = this.state.status;
        this.props.addArticle({ title, priority, time, status });
        event.preventDefault();
        this.setState({ title: "", priority: "", time: "" });
    }

    render() {
        const { title } = this.state.title;
        const { priority } = this.state.priority;
        const { time } = this.state.time;
        return (
            <form className="Todo" onSubmit={this.handleSubmit}>
                <br />
                <br />
                <div>
                    NAME:<input
                        required
                        type="text"
                        id="title"
                        value={title} />
                </div>
                <br />
                <br />
                <div >
                    PRIORITY: <input
                        required
                        type="number"
                        id="priority"
                        value={priority}
                    />
                    // {<Button onClick={() => this.props.sortPriority("Sort")}> Sort by Priority</Button>}
                        // <Button onClick={() => this.props.sortTime("Sort")}> Sort by Time</Button>
                        // <Button onClick={() => this.props.sortStatus("Sort")}> Sort by Status</Button>
                </div>
                <br />
                <br />
                <div>
                    TIME:<input
                        required
                        type="datetime-local"
                        id="time"
                        value={time}
                    />
                </div>
                <br />
                <br />
                <button type="submit"> SAVE </button>
                <br />
                <br />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;