/**
 * 08 useCallback
 * 用户点击时候计数器的增加或者减少
 *
 *每次调用提供相同的函数引用
 */
import React, { useState, useRef, useCallback } from "react";

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

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  return (
    <div>
      count => {count}
      <button onClick={start}>开始</button>
      <button onClick={stop}>结束</button>
    </div>
  );
};

export default Count;
