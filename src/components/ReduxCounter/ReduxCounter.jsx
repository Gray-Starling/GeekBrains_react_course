import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountValue } from "../../redux/reducers/countReducer/count-selectors";
import { decrease_Count, increase_Count } from "../../redux/actions/actions";

export const ReduxCounter = () => {
  const countValue = useSelector(getCountValue);
  const dispatch = useDispatch();

  const decreaseCountValue = () => {
    dispatch(decrease_Count());
  };

  const increaseCountValue = () => {
    dispatch(increase_Count());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={decreaseCountValue}>-</button>
      <span style={{ margin: "0 10px", fontSize: "44px" }}>{countValue}</span>
      <button onClick={increaseCountValue}>+</button>
    </div>
  );
};
