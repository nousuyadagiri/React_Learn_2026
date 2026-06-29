import React, { useReducer, useState } from "react";

const usersData = [
  { id: 1, name: "Nousu" },
  { id: 2, name: "Sowmya" },
  { id: 3, name: "Pinky" },
  { id: 4, name: "Chintu" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((person) => person.id !== action.payload);

    case "EDIT":
      return state.map((person) =>
        person.id === action.payload.id
          ? { ...person, name: action.payload.name }
          : person,
      );

    case "RESET":
      return usersData;

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, usersData);
  const [editPerson, setEditPerson] = useState(null);

  const handleEdit = (id) => {
    const person = state.find((p) => p.id === id);
    setEditPerson(person);
  };

  const handleChange = (e) => {
    setEditPerson({
      ...editPerson,
      name: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch({
      type: "EDIT",
      payload: {
        id: editPerson.id,
        name: editPerson.name,
      },
    });

    setEditPerson(null);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold">People List</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {state.map((person) => (
          <div
            key={person.id}
            className="flex flex-col items-center gap-3 rounded-xl border p-4"
          >
            {editPerson?.id === person.id ? (
              <>
                <input
                  className="rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
                  type="text"
                  value={editPerson.name}
                  onChange={handleChange}
                />

                <div className="flex gap-2">
                  <button
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-xs text-white"
                    onClick={handleSave}
                  >
                    Save
                  </button>

                  <button
                    className="rounded-lg bg-gray-500 px-4 py-2 text-xs text-white"
                    onClick={() => setEditPerson(null)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-medium">{person.name}</h3>

                <div className="flex gap-2">
                  <button
                    className="rounded-lg bg-red-500 px-4 py-2 text-xs text-white"
                    onClick={() =>
                      dispatch({
                        type: "DELETE",
                        payload: person.id,
                      })
                    }
                  >
                    Delete
                  </button>

                  <button
                    className="rounded-lg bg-green-600 px-4 py-2 text-xs text-white"
                    onClick={() => handleEdit(person.id)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        {state.length === 0 ? (
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset All
          </button>
        ) : (
          <button
            className="rounded-lg bg-black px-4 py-2 text-white"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
