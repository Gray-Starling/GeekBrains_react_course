import React, { useEffect, useRef, useState } from "react";
import { MessageRender } from "./MessageRender/MessageRender";
import { FormUi } from "../../FormUi/FormUi";
import "./ChatMessanger.css";

import { nanoid } from "nanoid";

export const ChatMessanger = () => {
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
    <div className="chat-container">
      <p className="title">Привет! Это поле для сообщений</p>
      <FormUi
        value={inputValue}
        onChange={(ev) => {
          setInputValue(ev.target.value);
        }}
        onSubmit={addMessage}
        type="submit"
      />
      <MessageRender messageList={messageList} />
    </div>
  );
};
