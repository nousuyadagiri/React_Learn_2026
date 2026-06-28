import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useContextProvider } from "../context/GlobalContext";

const DefaultLayout = () => {
  const { signOut, showLoginMessage, hideLoginMessage } = useContextProvider();
  const { pathname } = useLocation();
  const pageName = pathname.replace("/", "(:= ");

  useEffect(() => {
    if (showLoginMessage) {
      const timer = setTimeout(() => {
        hideLoginMessage();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showLoginMessage]);

  return (
    <div className="h-screen p-5 py-10">
      <div className="flex items-center sticky top-0 backdrop-blur-2xl bg-white/10 p-4 rounded-md mb-5">
        {showLoginMessage ? (
          <div className="text-emerald-600 text-2xl mr-auto">
            ✅ User logged in successfully!
          </div>
        ) : (
          <h4 className="text-2xl font-bold uppercase">{pageName}</h4>
        )}

        <div className="space-x-5 ms-auto">
          {["Profile", "Contact", "Practice"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm text-white hover:text-white/80 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => signOut()}
            className="bg-red-400 hover:bg-red-500 text-sm transition-colors duration-300 text-white px-4 py-1 rounded-md justify-end ms-auto"
          >
            Sign Out
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
