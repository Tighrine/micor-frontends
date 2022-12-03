import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);
    return (
      <div>
        <h1>Counter App</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onDecrement}>
          -
        </button>
        <span>
          Current count: <strong>{count}</strong>
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onIncrement}>
          +
        </button>
      </div>
    );
}