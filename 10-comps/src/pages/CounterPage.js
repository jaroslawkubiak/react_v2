import Button from "../components/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import useCounter from "../hooks/use-counter";
import { useState } from "react";

export default function CounterPage({ initialCount }) {
  const { count, increment, decrement, addValue, valueToAdd, changeValue } =
    useCounter(initialCount);

  const btnClass =
    "bg-yellow-400 flex w-10 h-10 items-center justify-center border-2 p-1 m-1 text-6xl cursor-pointer";
    
  return (
    <div>
      <h1>Count is {count}</h1>
      <div className="flex">
        <Button className={btnClass} onClick={decrement}>
          <AiOutlineMinus />
        </Button>
        <Button className={btnClass} onClick={increment}>
          <AiOutlinePlus />
        </Button>
      </div>
      <form className="flex flex-col" onSubmit={addValue}>
        <label>Add value</label>
        <input
          className="border-2 bg-yellow-400 w-30"
          value={valueToAdd}
          onChange={changeValue}
        />
      </form>
    </div>
  );
}
