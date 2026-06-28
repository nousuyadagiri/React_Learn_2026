import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ApiFetch = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search callback
  const search = useCallback((value) => {
    setSearchData(value);
  }, []);

  // Debounce function
  const debounce = (callback, delay) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  // Create the debounced function only when search changes
  const debounceSearch = useMemo(() => {
    return debounce(search, 500);
  }, [search]);

  // Input handler
  const handleChange = (e) => {
    debounceSearch(e.target.value);
  };

  // Fetch users
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users.");
      }

      const users = await res.json();
      setData(users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch once when component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoize filtered users
  const filteredUsers = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(searchData.toLowerCase()),
    );
  }, [data, searchData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="max-w-sm">
        <input
          type="text"
          placeholder="Search user..."
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-500/40 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="bg-neutral-900 rounded-2xl p-4">
              <h3 className="text-lg font-semibold">{user.name}</h3>

              <Link
                to={`mailto:${user.email}`}
                className="text-blue-500 underline text-sm"
              >
                {user.email}
              </Link>

              <p className="text-gray-400 text-sm mt-2">{user.phone}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-gray-400 text-xl py-10">
            User not found 😔
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiFetch;
