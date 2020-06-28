/**
 * 纯函数
 * 一个函数的的返回结果只依赖于它的参数
 * 函数执行过程中没有副作用
 */

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
  console.log("renderApp");
  renderTitle(appState.title);
  renderContent(appState.content);
}

// title
function renderTitle(title) {
  console.log("title");
  const titleDOM = document.getElementById("title");
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}
// content
function renderContent(content) {
  console.log("content");
  const contentDOM = document.getElementById("content");
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}

renderApp(appState); // 首次渲染页面
dispatch({ type: "UPDATE_TITLE_TEXT", text: "<react js 小书>" }); // 修改标题
dispatch({ type: "UPDATE_TITLE_COLOR", color: "blue" }); // 修改标题
renderApp(appState);
