import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./Massenger.css";
import { useSelector, useDispatch } from "react-redux";
import { getMessageList } from "../../redux/reducers/messageReducer/messageSelectors";

/**
 * Компонент рендерит область чата и функцияю отправки сообшения
 * @param {*} title - принемает значение из Router. название и адресс страницы
 */
export const Massenger = ({ title }) => {
  const author = "You";
  const messageList = useSelector(getMessageList);
  const [inputValue, setInputValue] = useState("");
  const myRef = useRef(null);
  const dispatch = useDispatch();

  /**
   * возвращает массив сообщений относящихся к определенной странице
   */
  const messages = messageList.filter((msg) => {
    return msg.attachedToChat === title;
  });

  const message = {
    id: nanoid(),
    attachedToChat: title,
    author: author,
    value: inputValue,
    date: new Date().toLocaleString().split(",")[0],
    time: new Date().toLocaleTimeString().slice(0, -3),
  };

  const messageFromBot = {
    id: nanoid(),
    attachedToChat: title,
    author: "Bot",
    value: "I can't answer you yet",
    date: new Date().toLocaleString().split(",")[0],
    time: new Date().toLocaleTimeString().slice(0, -3),
  };

  /**
   * Добавляет сообщение в массив сообщений из инпута
   * @param {*} ev - ev.preventDefault();
   */
  const addMessage = (ev) => {
    ev.preventDefault();
    dispatch({ type: "addMsg", payload: message });
    setInputValue("");
  };

  /**
   * Добавляет ответ бота в массив сообщений
   */
  const addMessageFromBot = () => {
    dispatch({ type: "addMsgFromBot", payload: messageFromBot });
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    if (messageList.length && lastMessage.author === "You") {
      const timer = setTimeout(() => {
        addMessageFromBot();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList.length]);

  useEffect(() => {
    if (messageList.length && myRef && myRef.current) {
      myRef.current.scrollIntoView();
    }
  }, [messageList.length]);
  return (
    <div className="messenger-wrp">
      <p className="messenger-title">Welcome to the {`"${title}"`} chat room</p>
      <div className="messenger-area">
        <form
          className="messenger-form"
          value={inputValue}
          onChange={(ev) => {
            setInputValue(ev.target.value);
          }}
          onSubmit={addMessage}
          type="submit"
        >
          <input
            className="messenger-form-input"
            type="text"
            value={inputValue}
            onChange={(ev) => {
              setInputValue(ev.target.value);
            }}
          />
          <input value="Send" type="submit" />
        </form>
        <div className="messenger-area-wrp">
          {messages.length ? (
            <div className="messenger-text-area">
              {messages.map((item) => (
                <div className="messenger-text-box" key={item.id}>
                  <div className="messenger-author-and-text">
                    <span className="messenger-text-author">
                      {item.author}:
                    </span>
                    <span className="messenger-text-value">{item.value}</span>
                  </div>
                </div>
              ))}
              <span ref={myRef}></span>
            </div>
          ) : (
            <span>
              There are no messages yet! Write something in the box below and
              click Enter
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Massenger.propTypes = {
  title: PropTypes.string,
};
