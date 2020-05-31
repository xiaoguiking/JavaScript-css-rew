/**
 * CommentApp 整体组件
 */

import React, { Component } from "react";
import "./index.css";
import CommentInput from "./CommentInput.js";
import CommentList from "./CommentList.js";

export default class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [], // 初始化数据 保存所有评论数据
    };
  }

  UNSAFE_componentWillMount() {
    this._loadComments();
  }

  // load加载时评论内容列表
  _loadComments() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }

  //持久化评论内容列表保存到localStorage中
  _saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }
  //  判断提交
  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert("输入用户名");
    if (!comment.content) return alert("输入评论内容");
    const comments = this.state.comments;
    this.state.comments.push(comment);
    this.setState({ comments });
    this._saveComments(comments);
    // console.log(comment);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
