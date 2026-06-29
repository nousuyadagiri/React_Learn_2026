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



// import React, { useMemo, useState } from "react";

// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [searchValue, setSearchValue] = useState("");

//   const numbers = [1, 4, 2, 5, 3, 10, 8];

//   const sortedNumbers = useMemo(() => {
//     console.log("Sorting...");
//     return [...numbers].sort((a, b) => a - b);
//   }, []);

//   return (
//     <div className="flex flex-col gap-5">
//       <h3>{count}</h3>

//       <p>{searchValue}</p>
//       <button
//         className="bg-white text-black px-3 py-2 rounded-xl"
//         onClick={() => setCount(count + 1)}
//       >
//         Increment
//       </button>
//       <input
//         type="text"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//         placeholder="enter here.."
//         className="border border-gray-500/40 px-4 ppy-2 rounded-xl outline-0"
//       />

//       <p>{sortedNumbers.join(", ")}</p>
//     </div>
//   );
// };

// export default UseMemo;

