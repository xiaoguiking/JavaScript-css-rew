/**
 * 自定义hook
 * useCount
 * count， start， reset， stop
 */
import { useRef, useState, useCallback } from "react";
function useCount(initValue, ms) {
  const [count, setCount] = useState(initValue);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
  }, [ms]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);
  return [count, start, stop, reset];
}

export default useCount;
