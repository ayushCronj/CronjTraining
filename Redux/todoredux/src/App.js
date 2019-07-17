import React, { Component } from "react";
import moment from "moment";
import List from "./List.js";
import { connect } from "react-redux";
import Filter from "./filter";
import './style.css';

import { Modal, DatePicker, Form, Input, InputNumber, Button, Select } from "antd";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClicked: false,
            index: "",
            editClicked: false
        }
        this.editTodo = this.editTodo.bind(this);
    }

    editTodo(i) {
        this.setState({
            index: parseInt(i),
            editClicked: true
        });
    }

    handleEditReset = () => {
        this.props.form.resetFields();
    };

    closeEditModal = () => {
        this.setState({
            editClicked: false,
            index: ""
        });
    };

    handleEditOk = () => {
        const index = this.state.index;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                values.time = new Date(values.time);
                values.time = values.time.toISOString();
                console.log(values);
                this.props.editTodo1(index, values);
                this.props.form.resetFields();
                this.setState({
                    editClicked: false,
                });
            }
        });
    };

    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                values.time = new Date(values.time);
                console.log(values.time);
                values.time = values.time.toISOString();
                console.log(values);
                this.props.addTodo(values);
                this.props.form.resetFields();
                this.setState({
                    addClicked: false,
                });
            }
        });
    };

    handlereset = () => {
        this.props.form.resetFields();
    };

    closeModal = () => {
        this.setState({
            addClicked: false,
        });
    };

    openModal = () => {
        this.props.form.resetFields();
        this.setState({
            addClicked: true,
        });
    };

    handleChange = (value) => {
        console.log(value);
        this.props.sortby(value);
    };

    handleFilterChange = (value) => {
        console.log(value);
        this.props.sortfilterby(value);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        // const config = {
        //     itialValue: this.props.todos[this.state.index].time,
        //     rules: [{
        //         type: 'object',
        //         required: true,
        //         message: 'Select Date and Time!'
        //     }],
        // };
        const { Option } = Select;
        function disabledDate(current) {
            return current && current.valueOf() <= Date.now();
        }
        return (
            <div className="App">
                {this.props.filterclicked === false ?
                    <div>
                        <div>
                            <br />
                            <br />
                            <h2> TO-DO Application </h2>
                            <br />
                            <br />
                            <Button
                                onClick={this.openModal}
                                type="primary">
                                Click to add a To-Do
                            </Button>
                        </div>

                        <div className="modaloverlay">
                            <Modal
                                className="Modal"
                                onCancel={this.closeModal}
                                visible={this.state.addClicked}
                                title="Enter Details"
                                footer={[
                                    <Button key="reset" onClick={this.handlereset}>
                                        Clear
                                        </Button>,
                                    <Button
                                        key="submit"
                                        type="primary"
                                        onClick={this.handleOk}>
                                        Submit
                                        </Button>,
                                ]}>
                                <Form {...formItemLayout}>
                                    <br />

                                    <Form.Item label="Name">
                                        {getFieldDecorator('name', {
                                            initialValue: "",
                                            rules: [{ required: true }]
                                        })(<Input />)}
                                    </Form.Item>
                                    <br />

                                    <Form.Item label="Priority:">
                                        {getFieldDecorator('priority', {
                                            initialValue: "",
                                            rules: [
                                                {
                                                    required: true
                                                },
                                            ],
                                        })(<InputNumber />)}
                                    </Form.Item>
                                    <br />

                                    <Form.Item label="Time">
                                        {getFieldDecorator('time', {
                                            initialValue: "",
                                            rules: [{
                                                type: 'object',
                                                required: true,
                                                message: 'Select Date and Time!'
                                            }],
                                        })(<DatePicker
                                            showTime
                                            disabledDate={disabledDate}
                                            format="YYYY-MM-DD HH:mm:ss" />)}
                                    </Form.Item>
                                    <br />
                                </Form>
                            </Modal>
                        </div>
                        <br />
                        <br />
                        {/* <b>Sort By: </b> */}
                        <h2>Options</h2>

                        <div>
                            <b>Sort By: </b>
                            <Select
                                style={{ width: 120 }}
                                onSelect={this.handleChange}>

                                <Option value="priority">Priority</Option>
                                <Option value="time">Time</Option>
                                <Option value="status">Status</Option>
                            </Select>
                        </div>
                        <Button
                            onClick={() => this.props.filterComplete("Filter_c")}>
                            Filter Completed
                        </Button>
                        <Button
                            onClick={() => this.props.filterInComplete("Filter_inc")}>
                            Filter Incompleted
                        </Button>
                        <br />
                        <Button
                            onClick={() => this.props.sortOrder("Sort")}>
                            Toggle Order
                        </Button>

                        <br />
                        <br />
                        <div>
                            <h2>List</h2>
                            <List todos={this.props.todos} editTodo={this.editTodo} />
                        </div>
                        {this.state.index === "" ? null :
                            <div>
                                <Modal
                                    onCancel={this.closeEditModal}
                                    visible={this.state.editClicked}
                                    title="Edit Details"
                                    footer={[
                                        <Button key="reset" onClick={this.handleEditReset}>
                                            Reset to Defaults
                                        </Button>,
                                        <Button
                                            key="submit"
                                            type="primary"
                                            onClick={this.handleEditOk}>
                                            Submit
                                        </Button>,
                                    ]}>
                                    <Form {...formItemLayout}>
                                        <br />

                                        <Form.Item label="Name">
                                            {getFieldDecorator('name', {
                                                initialValue: this.props.todos[this.state.index].name,
                                                rules: [{ required: true }]
                                            })(<Input />)}
                                        </Form.Item>
                                        <br />

                                        <Form.Item label="Priority:">
                                            {getFieldDecorator('priority', {
                                                initialValue: this.props.todos[this.state.index].priority,
                                                rules: [
                                                    {
                                                        required: true
                                                    },
                                                ],
                                            })(<InputNumber />)}
                                        </Form.Item>
                                        <br />
                                        <Form.Item label="Time">
                                            {getFieldDecorator('time', {
                                                initialValue: moment(this.props.todos[this.state.index].time),
                                                rules: [{
                                                    type: 'object',
                                                    required: true,
                                                    message: 'Select Date and Time!'
                                                }],
                                            })(<DatePicker
                                                showTime
                                                disabledDate={disabledDate}
                                                format="YYYY-MM-DD HH:mm:ss" />)}
                                        </Form.Item>
                                        <br />
                                    </Form>
                                </Modal>
                            </div>
                        }

                    </div>
                    :
                    <div>

                        <br />
                        <br />
                        <br />
                        <h2>Filter Options</h2>
                        <br />

                        <div>
                            <b>Sort By: </b>
                            <Select
                                style={{ width: 120 }}
                                onSelect={this.handleFilterChange}>

                                <Option value="priority">Priority</Option>
                                <Option value="time">Time</Option>
                            </Select>
                        </div>
                        <Button
                            onClick={() => this.props.filterComplete("Filter_c")}>
                            Filter Completed
                        </Button>
                        <Button
                            onClick={() => this.props.filterInComplete("Filter_inc")}>
                            Filter Incompleted
                        </Button>
                        <Button
                            onClick={() => this.props.removeFilter("Show")}>
                            Remove Filter
                             </Button>
                        <br />
                        <Button
                            onClick={() => this.props.sortfilterOrder("Sort")}>
                            Toggle Order
                        </Button>
                        <br />
                        <br />
                        <div>
                            <h2>Filtered List</h2>
                            <Filter filterarray={this.props.filterarray} />
                        </div>

                    </div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filterclicked: state.filterclicked,
        todos: state.todos,
        filterarray: state.filterarray
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (values) => dispatch({ type: "ADD_TODO", payload: values }),
        editTodo1: (index, values) => dispatch({ type: "EDIT_TODO", payload: { index, values } }),
        sortby: value => dispatch({ type: "SORT_BY", value }),
        sortfilterby: value => dispatch({ type: "SORT_FILTER_BY", value }),
        sortOrder: index => dispatch({ type: "SORT_ORDER", index }),
        sortfilterOrder: index => dispatch({ type: "SORT_FILTER_ORDER", index }),
        filterComplete: index => dispatch({ type: "FILTER_COMPLETE", index }),
        filterInComplete: index => dispatch({ type: "FILTER_INCOMPLETE", index }),
        removeFilter: index => dispatch({ type: "SHOW_ALL", index })
    };
}

const App1 = connect(mapStateToProps, mapDispatchToProps)(App);
export default Form.create()(App1);