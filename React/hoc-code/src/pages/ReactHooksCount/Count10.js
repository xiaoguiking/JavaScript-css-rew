/**
 * 10 使用useCount 案例
 *
 */
import React from "react";
import useCount from "./useCount";

const Count = () => {
  const [count, start, stop, reset] = useCount(0, 500);
  return (
    <div>
      count => {count}
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};

export default Count;
