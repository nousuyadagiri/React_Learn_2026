import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";
// #useCallback: is a React Hook that memoizes (caches) a function so that React does not create a new function on every render unless its dependencies change.

//NOTE: Every time a React component re-renders, all functions inside it are recreated.

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, [count]);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">UseCallback Page</h2>

      <div>{count}</div>

      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-2 bg-white text-black rounded-lg"
      >
        Increment
      </button>

      <UseCallbackChild onClick={handleClick} />
    </div>
  );
};

export default UseCallback;
