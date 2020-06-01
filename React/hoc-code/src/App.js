import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Tabbar from "./components/Tabbar.js";
import RouterMap from "./router.js";
import "./static/iconfont.css";
import CommentApp from "./pages/CommentShow/CommentApp";

//
function App() {
  return (
    <div className="App">
      {/*评论功能*/}
      {/* <CommentApp />*/}
      <CommentApp />
    </div>
  );
}

export default App;

//高阶组件
// function App() {
//   return (
//     <div className="App">
//       <RouterMap />
//     </div>
//   );
// }

// export default App;
