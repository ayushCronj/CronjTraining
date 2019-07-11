import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

const mapStateToProps = state => {
    return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
    return {
        markArticle: index => dispatch({ type: "MARK_ARTICLE", index }),
        deleteArticle: index => dispatch({ type: "DELETE_ARTICLE", index })
    };
}

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
                        <th> Mark </th>
                        <th> Delete </th>
                    </tr>
                    {this.props.articles.map((el, index) => (
                        <tr className={el.status === "COMPLETED" ? "complete" : null} key={index}>
                            <td>{el.title}</td><td>{el.priority}</td><td>{el.time}</td><td>{el.status}</td>
                            <td><button onClick={() => this.props.markArticle(index)}> Mark as Completed </button></td>
                            <td><button onClick={() => this.props.deleteArticle(index)}> Delete </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;