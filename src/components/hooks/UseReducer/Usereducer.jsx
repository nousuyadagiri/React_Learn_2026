import React, { useReducer } from "react";

// An alternative to useState for managing complex state logic with action-based dispatches (similar to Redux).

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "clear":
      return { ...state, count: 0 };

    case "change":
      return {
        ...state,
        name: "Giri",
      };

    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, name: "Nousu" });

  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <span>{state.count}</span>
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => dispatch({ type: "clear" })}
      >
        Clear
      </button>
      <span>{state.name}</span>
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={() => dispatch({ type: "change" })}
      >
        Text Change
      </button>
    </div>
  );
};

export default UseReducer;
