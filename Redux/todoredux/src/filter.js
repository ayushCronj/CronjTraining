import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

const mapStateToProps = state => {
    return { filterarray: state.filterarray };
};

class ConnectedList1 extends Component {
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
                        <tr className={el.status === "COMPLETED" ? "complete" : null} key={index}>
                            <td>{el.title}</td><td>{el.priority}</td><td>{el.time}</td><td>{el.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

const List1 = connect(mapStateToProps)(ConnectedList1);
export default List1;