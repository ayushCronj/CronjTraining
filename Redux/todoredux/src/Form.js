
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "./actions";
import './style.css';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

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
                        type="text"
                        id="title"
                        value={title} />
                </div>
                <br />
                <br />
                <div >
                    PRIORITY: <input
                        type="number"
                        id="priority"
                        value={priority}
                    />
                </div>
                <br />
                <br />
                <div>
                    TIME:<input
                        type="datetime-local"
                        id="time"
                        value={time}
                    />
                </div>
                <br />
                <br />
                <button type="submit"> SAVE TO-DO </button>
                <br />
                <br />
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;