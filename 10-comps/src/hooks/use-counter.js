import { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState();

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addValue = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd("");
  };

  const changeValue = (e) => {
    setValueToAdd(Number(e.target.value));
  };

  return { count, increment, decrement, addValue, valueToAdd, changeValue };
}

export default useCounter;
