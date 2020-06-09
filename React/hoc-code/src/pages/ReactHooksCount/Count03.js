/**
 * 03 useEffect
 *
 * 问题: 1.资源泄漏 实现不正确 2.计数更改会创建新的Interval 3,浏览器标签崩溃
 *
 * 防止资源泄漏，Hooks 的生命周期结束时，必须清理所有内容。 在这种情况下，组件卸载后将调用返回的函数。
 * 总结： 解决了泄漏，但是实现不正确
 *
 * 加入依赖性 count(未加之前只会调用一次 0 ---1)
 * 问题每 500 毫秒创建和释放 setInterval， 每个 setInterval 总是调用一次。
 *
 * 总结： 代码可以正常工作， 问题是500毫秒
 */
import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [count]);

  return <div>count => {count}</div>;
};

export default Count;
