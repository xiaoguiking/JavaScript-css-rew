/**
 * 
 * Comment  评论单个显示组件每条评论的具体显示
 */
import React, { Component } from 'react'
export default  class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        console.log(this.props, 'props');
        return ( 
            <div className="comment">
                <div className="comment-user">
                <span>{this.props.comment.username}: &nbsp;</span>
                </div>
                <p>{this.props.comment.content}</p>
            </div>
         );
    }
}
 