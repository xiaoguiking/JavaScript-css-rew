/**
 * 05局部变量
 *
 * 增加start 和stop按钮
 * stop不工作，每次渲染期间都会指向新的引用（interval的引用），stop里面的
 * interval的值一直null
 * 代码实现不正确
 */
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  let interval = null;

  const start = () => {
    console.log(1);
    interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
  };

  // stop 不工作
  const stop = () => {
    console.log(2);
    clearInterval(interval);
  };
  return (
    <div>
      count => {count}
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
    </div>
  );
};

export default Count;
