import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReduxCounter = () => {
  const value = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <span style={{ margin: "0 10px", fontSize: "44px" }}>{value}</span>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
    </div>
  );
};
