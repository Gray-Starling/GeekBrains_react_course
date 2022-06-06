import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Massenger } from "../Massenger/Massenger";
import { CreateChat } from "../CreateChat/CreateChat";

import "./ChatPage.css";

/**
 * Компонет рендерит список чатов.
 * Реализованны функции добавления/удаления чата
 * Рендерит область чата в зависимости от выбранного чата
 */
export const ChatPage = () => {
  const { title } = useParams();
  const [chatName, setChatName] = useState("");
  const listOfChats = useSelector((state) => state.chatList.chatList);
  const dispatch = useDispatch();

  const handleChange = (ev) => setChatName(ev.target.value);

  /**
   * Функция добавляет новый чат.
   * Обнуляет chatName в инпуте
   * @param {*} ev - ev.preventDefault();
   */
  const addChatHandler = (ev) => {
    let newChat = {
      id: nanoid(),
      name: chatName,
    };
    dispatch({ type: "addChat", payload: newChat });
    ev.preventDefault();
    setChatName("");
  };

  /**
   * Удаляем чат по его id
   * @param {*} id - id чата в массиве чатов
   */
  const removeChatHandler = (id) => {
    dispatch({ type: "delChat", payload: id });
  };

  return (
    <>
      <div className="chat-page">
        <div className="chat-page-nav">
          <div className="chat-page-list">
            <CreateChat
              onSubmit={addChatHandler}
              onChange={handleChange}
              className="chat-page-form"
              value={chatName}
            />

            {listOfChats.map((item) => {
              return (
                <div className="chat-page-link-wrp" key={item.id}>
                  <Link
                    className="chat-page-link"
                    to={`/chatlist/${item.name}`}
                  >
                    <span className="chat-page-item">{item.name}</span>
                  </Link>
                  <button
                    className="chat-page-link-btn"
                    onClick={() => removeChatHandler(item.id)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {title ? (
          <div className="main">
            <Massenger title={title} />
          </div>
        ) : (
          <div className="chat-page-description-wrp">
            <p className="chat-page-description">
              The list of chats on the left, by clicking on the desired link you
              will be taken to the desired chat room.
            </p>
            <p className="chat-page-description">
              If for some reason you don&lsquo;t like the room, you can delete
              it by clicking on the cross. You can also add your room using the
              form.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
