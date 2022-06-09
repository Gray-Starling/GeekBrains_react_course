import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountValue } from "../../redux/reducers/countReducer/count-selectors";

export const ReduxCounter = () => {
  const countValue = useSelector(getCountValue);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => dispatch({ type: "DECREASE_COUNT" })}>-</button>
      <span style={{ margin: "0 10px", fontSize: "44px" }}>{countValue}</span>
      <button onClick={() => dispatch({ type: "INCREASE_COUNT" })}>+</button>
    </div>
  );
};
