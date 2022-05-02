import React from "react";
import "./Input.css";

export const Input = (props) => {
  return (
    <input
      className="input"
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
};
