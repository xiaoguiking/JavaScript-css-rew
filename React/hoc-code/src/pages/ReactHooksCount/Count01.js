/**
 * 基本版计数器
 * 用户点击时候计数器的增加或者减少
 */
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      count => {count}
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
};

export default Count;
