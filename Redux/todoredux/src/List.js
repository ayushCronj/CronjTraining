import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import './style.css';

class ConnectedList extends Component {
    render() {
        return (
            <table id="table1">
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Priority </th>
                        <th> Time </th>
                        <th> Status </th>
                        <th colSpan="3"> Actions </th>
                    </tr>
                    {this.props.todos.map((el, index) => (
                        <tr
                            className={el.status === "COMPLETED" ? "complete" : null}
                            key={index}>
                            <td>{el.name}</td>
                            <td>{el.priority}</td>
                            <td>{el.time}</td>
                            <td>{el.status}</td>
                            {el.status === "COMPLETED" ?
                                <td colSpan="3"><Icon
                                    type="delete"
                                    theme="filled"
                                    style={{ fontSize: 20 }}
                                    onClick={() => this.props.deleteTodo(index)} /> </td>
                                :
                                <span>
                                    <td><Icon
                                        type="check-square"
                                        theme="filled"
                                        style={{ fontSize: 20 }}
                                        onClick={() => this.props.markTodo(index)} /></td>
                                    <td><Icon
                                        type="delete"
                                        theme="filled"
                                        style={{ fontSize: 20 }}
                                        onClick={() => this.props.deleteTodo(index)} /> </td>
                                    <td><Icon
                                        type="edit"
                                        theme="filled"
                                        style={{ fontSize: 20 }}
                                        onClick={() => this.props.editTodo(index)} /> </td>
                                </span>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        markTodo: index => dispatch({ type: "MARK_TODO", index }),
        deleteTodo: index => dispatch({ type: "DELETE_TODO", index })
    };
}

const List = connect(null, mapDispatchToProps)(ConnectedList);
export default List;