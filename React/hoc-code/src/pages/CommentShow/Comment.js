/**
 *
 * Comment  评论单个显示组件每条评论的具体显示
 */
import React, { Component } from "react";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeString: "",
    };
  }

  UNSAFE_componentWillMount() {
    this._updateTimeString();
    this._timer = setInterval(() => {
      this._updateTimeString.bind(this);
      console.log("1");
    }, 5000);
  }

  // 评论时间方法
  _updateTimeString() {
    const comment = this.props.comment;
    const duration = (+Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeString:
        duration > 30
          ? `${Math.round(duration / 60)}分钟前`
          : `${Math.round(Math.max(duration, 1))}秒前`,
    });
  }

  render() {
    console.log(this.props, "props");
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}: &nbsp;</span>
        </div>
        <p>{this.props.comment.content}</p>
        <span className="comment-createdtime">{this.state.timeString}</span>
      </div>
    );
  }
}
