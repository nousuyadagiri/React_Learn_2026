import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function slowFunction(num) {
    console.log("Calculating...");

    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
  }

  const result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl mb-5">UseMemo Page</h1>

      <h1>{result}</h1>
      <p>{text}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-white text-black"
      >
        Increase
      </button>

      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        className="border border-gray-500/30 px-4 py-2"
      />
    </div>
  );
};

export default UseMemo;
