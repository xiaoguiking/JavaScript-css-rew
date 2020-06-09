/**
 * 06 useRef
 * useRef 确保每次返回的是相同的变量
 * 问题： 如果start多次调用，那么setInterval多次调用，触发内存泄漏
 */
import React, { useState, useRef } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
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
