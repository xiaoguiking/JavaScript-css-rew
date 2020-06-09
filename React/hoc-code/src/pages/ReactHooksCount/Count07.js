/**
 * 07 useRef 判空处理
 * 判空之后性能问题 用memo
 */
import React, { useState, useRef } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
  };

  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
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
