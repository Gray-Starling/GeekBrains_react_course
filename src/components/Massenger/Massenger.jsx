import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./Massenger.css";

export const Massenger = ({ title }) => {
  const author = "Вы";
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  const clearMessageList = () => {
    setMessageList([]);
    setInputValue("");
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    if (messageList.length && lastMessage.author === "Вы") {
      const timer = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            id: nanoid(),
            author: "Bot",
            text: "Спасибо за ваше сообщение!",
            date: new Date().toLocaleString().split(",")[0],
            time: new Date().toLocaleTimeString().slice(0, -3),
          },
        ]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);

  useEffect(() => {
    clearMessageList();
  }, [title]);
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
          {messageList.length ? (
            <div className="messenger-text-area">
              {messageList.map((item) => (
                <div className="messenger-text-box" key={item.id}>
                  <div className="messenger-author-and-text">
                    <span className="messenger-text-author">
                      {item.author}:
                    </span>
                    <span className="messenger-text-value">{item.text}</span>
                  </div>
                </div>
              ))}
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
