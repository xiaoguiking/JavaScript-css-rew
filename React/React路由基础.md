
## React router

### 简单路由页面

`src/index.js`
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppRouter';
```

```
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// 组件1
function Index(){
    return (
        <div>Index首页</div>
    )
}

// 组件二
function List() {
    return (<div>List列表</div>)
}

function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/"></Link></li>
            </ul>
            <Route path="/" exact component={Index}/>
            <Route path="/list/" component={List} />
        </Router>
    )
}

```

### 路由传值


> 在List组件接受并显示传递值

`App.js`

```
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';

function App(){
    return (
        <Router>
            <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index}>
            <Route path="/list/:id" component={List}>
        </Router/>
    )
}

export default App;
```





```
import React, {Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        render(){
            return (
                <div>List Page</div>
            )
        }
    }
    // 关键代码接收传递的值
    componentDidMount(){
        console.log(this.props.match);
    }
}


export default List;
```
**this.props.match**

- patch 自己定义的路由规则，可以清楚看到传递的参数id
- url：真是访问路径,
- params: 传递过来的参数 key 和value值


**页面显示传递过来的id值**
```
import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>List Page-----{this.state.id}</div>
        )
    }
    // 接收具体的值
    componentDidMount(){
        let tmpId = this.props.match.params.id;
        this.setState = {
            id: tmpId
        }
    }
}


export default List;
```