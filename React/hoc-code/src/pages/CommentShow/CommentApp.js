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
         this.state = {  }
     }

     handleSubmitComment (comment) {
        console.log(comment)
      }
     render() { 
         return ( 
             <div className="wrapper">
              <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
              <CommentList />
             </div>
          );
     }
 }
  
