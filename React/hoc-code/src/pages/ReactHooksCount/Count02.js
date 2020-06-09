/**
 * 02 每500毫秒增加计数器
 * 问题： 1，实现不正确内存泄漏 2.浏览器标签崩溃 3.触发渲染都会创建新的setInterval
 */
import React, { useState } from "react";
console.log("渲染");
const Count = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 500);

  return <div>count => {count}</div>;
};

export default Count;

// 突变、订阅、计时器、日志记录和其他副作用不允许出现在函数组件的主体中(称为 React 的 render 阶段)。 这样做会导致用户界面中的错误和不一致。
