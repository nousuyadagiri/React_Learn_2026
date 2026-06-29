import React from "react";
import useFetchApi from "./UseFetchApi";

const URL = "https://jsonplaceholder.typicode.com/users";

const CustomHookData = () => {
  const { data, loading, error } = useFetchApi(URL);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Users List</h1>

      {data.map((user) => (
        <div key={user.id} className="mb-4 rounded border p-4 shadow">
          <h3 className="font-semibold">{user.name}</h3>

          <p>{user.email}</p>

          <p>{user.phone}</p>

          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomHookData;
