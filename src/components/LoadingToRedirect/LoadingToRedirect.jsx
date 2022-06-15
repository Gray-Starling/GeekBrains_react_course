import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((countValue) => --countValue);
    }, 1000);
    if (count === 0) {
      navigate("/login");
    }
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <div className="wrp">
        <p>You are not allowed, you are not authorized</p>
        <p>Redirecting you in {count} seconds</p>
      </div>
    </>
  );
};
