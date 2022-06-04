import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useParams, Link } from "react-router-dom";
import { chatListArray } from "../constants/chatListArray";
import { Massenger } from "../Massenger/Massenger";

import "./ChatPage.css";

//! Удалить/ изменить/ решить вопрос с добавлние чатов
//! Сделать правильные стили что бы визуально все смотрелось
export const ChatPage = () => {
  const { title } = useParams();
  const [listOfChats, addChatToList] = useState(chatListArray);
  const [chatName, setChatName] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const addChatHandler = () => {
    let newChat = {
      id: nanoid(),
      name: chatName,
      description: descriptionValue,
    };
    addChatToList((prev) => [...prev, newChat]);
    setChatName("");
    setDescriptionValue("");
  };

  return (
    <>
      <input
        placeholder="name of your chat"
        type="text"
        name={chatName}
        value={chatName}
        onChange={(ev) => {
          setChatName(ev.target.value);
        }}
      />
      <input
        placeholder="desc of your chat"
        type="text"
        name={descriptionValue}
        value={descriptionValue}
        onChange={(ev) => {
          setDescriptionValue(ev.target.value);
        }}
      />
      <button type="submit" onClick={addChatHandler}>
        Send
      </button>

      <div className="chat-page">
        <div className="chat-page-nav">
          <div className="chat-page-list">
            {listOfChats.map((item) => {
              return (
                <Link
                  className="chat-page-link"
                  key={item.id}
                  to={`/chatlist/${item.name}`}
                >
                  <span className="chat-page-item">{item.name}</span>
                  <button>x</button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="main">
          <Massenger title={title} />
        </div>
      </div>
    </>
  );
};
