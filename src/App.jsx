import React, { useEffect, useRef, useState } from "react";
import { MessageRender } from "./components/MessageRender/MessageRender";
import { Form } from "./components/Form/Form";
import { nanoid } from "nanoid";
import "./App.css";

export const App = () => {
  const author = "Вы";
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const focus = useRef(null);

  const message = {
    id: nanoid(),
    author: author,
    text: inputValue,
    date: new Date().toLocaleString().split(",")[0],
    time: new Date().toLocaleTimeString().slice(0, -3),
  };

  const addMessage = (ev) => {
    ev.preventDefault();
    setMessageList([...messageList, message]);
    setInputValue("");
    if (null !== focus.current) {
      focus.current.focus();
    }
  };

  useEffect(() => {
    if (messageList.length) {
      const timer = setTimeout(() => {
        alert("Отправленно");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);

  return (
    <div className="container">
      <p className="title">Привет! Это поле для сообщений</p>
      <MessageRender messageList={messageList} />
      <Form
        value={inputValue}
        onChange={(ev) => {
          setInputValue(ev.target.value);
        }}
        onSubmit={addMessage}
        type="submit"
      />
    </div>
  );
};
