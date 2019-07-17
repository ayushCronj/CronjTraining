import React, { Component } from "react";
// import { connect } from "react-redux";
import './style.css';

class List extends Component {

    render() {
        return (
            <table id="table2">
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Priority </th>
                        <th> Time </th>
                        <th> Status </th>
                    </tr>
                    {this.props.filterarray.map((el, index) => (
                        <tr
                            className={el.status === "COMPLETED" ? "complete" : null}
                            key={index}>
                            <td>{el.name}</td>
                            <td>{el.priority}</td>
                            <td>{el.time}</td>
                            <td>{el.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default List;