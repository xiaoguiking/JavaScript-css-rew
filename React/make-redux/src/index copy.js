// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 功能测试
let appState = {
  title: {
    text: "React.js小书",
    color: "red",
  },
  content: {
    text: "React小书内容",
    color: "blue",
  },
};

// dispatch 中间人
function dispatch(action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      appState.title.text = action.text;
      break;
    case "UPDATE_TITLE_COLOR":
      appState.title.color = action.color;
      break;
    default:
      break;
  }
}

function renderApp(appState) {
  renderTitle(appState.title);
  renderContent(appState.content);
}

// title
function renderTitle(title) {
  const titleDOM = document.getElementById("title");
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}
// content
function renderContent(content) {
  const contentDOM = document.getElementById("content");
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}

renderApp(appState); // 首次渲染页面
dispatch({ type: "UPDATE_TITLE_TEXT", text: "<react js 小书>" }); // 修改标题
dispatch({ type: "UPDATE_TITLE_COLOR", color: "blue" }); // 修改标题
renderApp(appState);
