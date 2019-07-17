import React from 'react';
import './App.css';
import { Button, Modal, Card } from 'antd';

function short(str) {
    if (str.length > 25) {
        return (str.substring(0, 23) + "...");
    }
    else {
        return str;
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalClicked: false,
        }
    }

    handleOk = () => {
        this.setState({
            modalClicked: false,
        });
    };

    closeModal = () => {
        this.setState({
            modalClicked: false,
        });
    }

    showModal = () => {
        this.setState({
            modalClicked: true,
        });
    };

    render() {
        return (
            <Card
                style={{ margin: 20 }}
                cover={
                    <div className="photo">
                        <img src={this.props.reports.imageUrl} alt="Avatar" style={{ marginLeft: "33px", width: 200, height: 200 }} />
                    </div>
                }
            >
                <hr />
                <div>

                    <h2> {this.props.reports.title} </h2>
                    <br />
                    <b>Short Description : </b> {short(this.props.reports.description)}
                    <br />
                    <br />
                    <br />
                    <p> <b> Published Date : </b> {this.props.reports.publishedDate} </p>
                    <br />
                    <p><b> Cost : </b>{this.props.reports.cost} </p>
                    <hr />
                    <div id="main1">
                        <Button type="primary" onClick={this.showModal}> Show Complete Details </Button>
                    </div>
                </div>
                <Modal className="Modal" title="View Details" visible={this.state.modalClicked} onCancel={this.closeModal}
                    footer={[
                        <Button
                            key="Ok"
                            type="primary"
                            onClick={this.handleOk}>
                            Ok
                        </Button>
                    ]}>
                    <div className="container">
                        <div >
                            <img src={this.props.reports.imageUrl} alt="Avatar" style={{ marginLeft: "33px", width: 200, height: 200 }} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <p id="title">
                                <b> Title : </b> {this.props.reports.title} </p>
                            <br />
                            <p id="description">
                                <b> Description : </b> {this.props.reports.description} </p>
                            <br />
                            <p id="date">
                                <b> Published Date : </b> {this.props.reports.publishedDate} </p>
                            <br />
                            <p id="cost">
                                <b> Cost : </b> {this.props.reports.cost} </p>
                        </div>
                    </div>
                </Modal>
            </Card>
        )
    }
}

export default Display;