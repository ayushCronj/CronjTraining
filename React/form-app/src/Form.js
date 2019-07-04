import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.props.display(event.target.elements.formname.value, event.target.elements.formage.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="Form" onSubmit={this.handleSubmit} >
                    <br />
                    <b>Name: </b>< input id="formname" />
                    <br />
                    <br />
                    <b>Age: </b>< input type="number" id="formage" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form
