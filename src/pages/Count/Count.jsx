import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Count = () => {
  const value = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="wrp">
      <p className="title">Redux Counter</p>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
    </div>
  );
};
