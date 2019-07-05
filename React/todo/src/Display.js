import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.array.map((item, index) => <tr key={index}> <td>{item.name}</td><td>{item.priority}</td><td>{item.time}</td><td>{item.status}</td></tr>)
        )
    }
}

export default Display