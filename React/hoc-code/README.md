## React 评论功能实战

- CommentApp 评论功能整体组件
- CommentInput 负责用户输入可操作的输入区域，包括输入评论的用户名、评论内容和发布按钮
- CommentList 评论列表
- Comment 每个评论列表由 Comment 负责显示

### 功能需求第二阶段

- 页面加载完成自动聚焦评论输入框
- 用户名持久化存放到浏览器的 localStorage 中，页面加载时会把用户名加载出来显示到输入框，
- 已经发布的评论持久化，存到到 localStorage 中，显示到页面的评论列表上
- 评论显示发布日期， 如“1 秒前”， ’30 分钟前‘
- 评论可以被删除
- 类似 markdown 效果行内块显示，用户输入的``被处理成<code>包裹

> 备注：组件的私有方法都用\_开头，所有事件监听的方法都用 handle 开头，把事件监听方法传给组件的时候属性名用 on 开头

```react
<ComponentInput
    onSubmit={this.handleSubmitComment.bind(this)}
>
```

> 什么是高阶组件

高阶组件就是一个函数，传给它一个组件，它返回一个新的组件

`const NewComponent = highOrderComponent(OldComponent)`

```react
import React, {Component} from 'react';

export default  (WrappedComponent) => {
    class NewComponent extends Component {
        render(){
            return  <WrappedComponent />
        }
    }
    return NewComponent
}

```
