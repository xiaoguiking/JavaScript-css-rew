/**
 *  CommentInput Input组件
 */
import React, { Component } from "react";
// import PropTypes from 'prop-types'
export default class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
      createdTime: "",
    };
  }

  componentWillMount() {
    this._loadUsername();
  }

  componentDidMount() {
    this.textarea.focus();
  }

  // 监听name
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  // 监听content
  handleContentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  // 点击提交
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content, createdTime: +new Date() });
    }
    this.setState({ content: "" });
  }

  // 加载时候获取localStorage值
  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ username });
    }
  }

  // 保存username到localStorage
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }

  // 失去焦点执行保存方法
  handleUsernameBlur(event) {
    this._saveUsername(event.target.value);
  }

  render() {
    let { username, content } = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名:</span>
          <div className="comment-field-input">
            <input
              value={username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(textarea) => (this.textarea = textarea)}
              value={content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
          <div className="comment-field-button">
            <button onClick={this.handleSubmit.bind(this)}>发布</button>
          </div>
        </div>
      </div>
    );
  }
}
