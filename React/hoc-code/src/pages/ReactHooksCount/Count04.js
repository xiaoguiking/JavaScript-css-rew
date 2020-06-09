/**
 *  04 useState的函数更新
 * setCount((c) => c + 1);
 * 这段代码工作正常，效率更高。 在组件的生命周期中，我们使用单个 setInterval，
 * clearInterval 只会在卸载组件之后调用一次。
 */
import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [count]);

  return <div>count => {count}</div>;
};

export default Count;
