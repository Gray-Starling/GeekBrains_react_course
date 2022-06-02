import React from "react";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <>
      <div className="wrp">
        <p className="error">404 Error</p>
        <p className="error-comfort">Looks like you are lost, friend!</p>
        <p className="error-description">
          The page you are looking for can&lsquo;t be found
        </p>
      </div>
    </>
  );
};
