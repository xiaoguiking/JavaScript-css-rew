/**
 * CommentApp 整体组件
 */

 import React, { Component } from 'react'
 import './index.css';
 import CommentInput from './CommentInput.js';
 import CommentList from './CommentList.js';

 export default class CommentApp extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             comments: [], // 初始化数据 保存所有评论数据
          }
     }

     handleSubmitComment (comment) {
         if(!comment) return
         if(!comment.username) return alert('输入用户名');
         if(!comment.content) return alert('输入评论内容');
         
         this.state.comments.push(comment);
         this.setState({
             comments: this.state.comments
         })
        console.log(comment)
      }
     render() { 
         return ( 
             <div className="wrapper">
              <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
              <CommentList comments={this.state.comments}/>
             </div>
          );
     }
 }
  
