import React, { useEffect } from "react";
import { useContextProvider } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signIn, isLoading, isAuthenticated } = useContextProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
      {isLoading && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p>Signing you in...</p>
          </div>
        </div>
      )}

      <h3 className="text-3xl">Sign In Page</h3>

      <button
        onClick={signIn}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
