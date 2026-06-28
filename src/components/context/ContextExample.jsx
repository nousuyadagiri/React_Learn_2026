import React from "react";
import { useContextProvider } from "../context/GlobalContext";

// Context used share data across many components without passing props manually through every level (called "prop drilling")

const ContextExample = () => {
  const { data, add, count, clear, remove } = useContextProvider();

  return (
    <div className="flex flex-col gap-4">
      <h3>{data.name}</h3>
      <p>{data.age}</p>
      <small>{data.email}</small>

      <button
        className="px-4 py-2 rounded-xl bg-white text-black!"
        onClick={() => add()}
      >
        Increment
      </button>
      <h4 className="text-center">{count}</h4>
      <button
        className="px-4 py-2 rounded-xl bg-red-400 text-white"
        onClick={() => remove()}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 rounded-xl bg-white text-black!"
        onClick={() => clear()}
      >
        Clear
      </button>
    </div>
  );
};

export default ContextExample;
