import React from "react";
import { GetCatsApi } from "../../components/GetCatsApi/GetCatsApi";

export const ReactApi = () => {
  return (
    <div className="wrp">
      <p className="title">React Api</p>
      <GetCatsApi />
    </div>
  );
};
