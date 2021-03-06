import React, { Component } from 'react';
import { Card, Icon, Modal, Form, Input } from 'antd';
import { connect } from "react-redux";
import './App.css';
import './Modal.css';

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

class Users1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      editClicked: false,
    }
  }


  toggleLiked = () => {
    this.setState((prevState) => ({
      liked: !prevState.liked,
    }));
  };

  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.editPerson(this.props.index, values);
        this.setState({
          editClicked: false,
        });
      }
    });
  };

  closeModal = () => {
    this.setState({
      editClicked: false,
    });
  }

  openModal = () => {
    this.setState({
      editClicked: true,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card
        style={{ margin: 20 }}
        cover={
          <div className="photo">
            <img src={"https://avatars.dicebear.com/v2/avataaars/" + this.props.user.username + ".svg?options[mood][]=happy"} alt="Avatar" style={{ marginLeft: "33px", width: 200, height: 200 }} />
          </div>
        }
      >

        <hr />
        <div style={{ opacity: 0.9 }} >
          <h4>{this.props.user.name}</h4>
          <div>
            <Icon type="mail" style={{ fontSize: '16px' }} /> {this.props.user.email}
          </div>
          <br />

          <div>
            <Icon type="phone" style={{ fontSize: '16px' }} /> {this.props.user.phone}
          </div>
          <br />

          <div>
            <Icon type="global" style={{ fontSize: '16px' }} /> {this.props.user.website}
          </div>
          <br />
          <hr />
          <br />

        </div>
        <div id="main1">
          <Icon onClick={this.toggleLiked} type="heart" style={{ color: 'red', fontSize: 25 }} theme={this.state.liked ? 'filled' : 'outlined'} />
          <div style={{ width: "1px", background: "gray", height: "25px", float: "right" }}> </div>
          <Icon className="icon" onClick={this.openModal} type="edit" theme="filled" style={{ fontSize: 25 }} />
          <div style={{ width: "1px", background: "gray", height: "25px", float: "right" }}> </div>
          <Icon className="icondel" onClick={() => { this.props.deleteUser(this.props.index); }} type="delete" theme="filled" style={{ fontSize: 25 }} />
        </div>
        <div className="modaloverlay">
          <Modal className="Modal" onOk={this.handleOk} onCancel={this.closeModal} visible={this.state.editClicked} title="Edit Details" >
            <Form {...formItemLayout}>
              <br />

              <Form.Item label="Name">
                {getFieldDecorator('name', {
                  initialValue: this.props.user.name,
                  rules: [{ required: true }]
                })(<Input />)}
              </Form.Item>
              <br />

              <Form.Item label="Email:">
                {getFieldDecorator('email', {
                  initialValue: this.props.user.email,
                  rules: [
                    {
                      required: true
                    },
                    {
                      type: 'email',
                      message: 'Invalid email',
                    }
                  ],
                })(<Input />)}
              </Form.Item>
              <br />

              <Form.Item label="Phone:">
                {getFieldDecorator('phone', {
                  initialValue: this.props.user.phone,
                  rules: [{ required: true }]
                })(<Input />)}
              </Form.Item>
              <br />

              <Form.Item label="Website:">
                {getFieldDecorator('website', {
                  initialValue: this.props.user.website,
                  rules: [{ required: true }]
                })(<Input />)}
              </Form.Item>
              <br />

            </Form>
          </Modal>
        </div>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    liked: index => dispatch({ type: "LIKE_PERSON", index }),
    deleteUser: index => dispatch({ type: "DELETE_PERSON", index }),
    editPerson: (index, values) => dispatch({ type: "EDIT_PERSON", payload: { index, values } })
  };
}

const Users = connect(null, mapDispatchToProps)(Users1);

export default Form.create()(Users);
