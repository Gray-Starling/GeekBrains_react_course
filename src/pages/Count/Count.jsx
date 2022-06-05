import React from "react";
import { ReduxCounter } from "../../components/ReduxCounter/ReduxCounter";

export const Count = () => {
  return (
    <div className="wrp">
      <p className="title">Redux Counter</p>
      <ReduxCounter />
    </div>
  );
};
