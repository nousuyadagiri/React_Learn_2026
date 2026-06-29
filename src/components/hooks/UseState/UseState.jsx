import React, { useState } from "react";


// the most fundamental hooks. It adds a local relatives state variable to a functional component.

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => setCount(0)}
      >
        Clear
      </button>
    </div>
  );
};

export default UseState;
