import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.props.submit(event.target.elements.formname.value, event.target.elements.formpriority.value, event.target.elements.formtime.value);
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form className="Todo" onSubmit={this.handleSubmit} >
                    <br />
                    <b>Name: </b>< input id="formname" />
                    <br />
                    <br />
                    <b>Priority: </b>< input type="number" id="formpriority" />
                    <br />
                    <br />
                    <b>Time: </b>< input type="datetime-local" min="2019-07-04T08:30" id="formtime" />
                    <br />
                    <br />
                    {/* <b>Status: </b>< input id="formstatus" />
                    <br />
                    <br /> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Todo