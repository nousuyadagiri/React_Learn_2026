import React from "react";

// #React.memo is a Higher-Order Component (HOC).

// Only re-render this component if its props change.;

const UseCallbackChild = React.memo(({ onClick }) => {
  return (
    <div>
      <h3>UseCallbackChild</h3>

      <button
        onClick={onClick}
        className="px-3 py-2 bg-white text-black rounded-lg mt-4"
      >
        onChange
      </button>
    </div>
  );
});

export default UseCallbackChild;
