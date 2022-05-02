import React, { FC } from "react";
import "./Message.css";

export interface MessageProps {
  title: string;
  text: string;
}

export const Message: FC = () => {
  const title = "React";
  const text =
    "JavaScript-библиотека для создания пользовательских интерфейсов";
  return (
    <div className="block">
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
};
