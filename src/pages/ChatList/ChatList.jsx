import React from "react";
import { Link } from "react-router-dom";
import { chatListArray } from "../../components/constants/chatListArray";
import "./ChatList.css";

export const ChatList = () => {
  return (
    <>
      <div className="wrp">
        <p className="chatList-page-title">Chat list</p>
        <div className="chatList-block">
          {chatListArray.map((item) => (
            <Link
              className="chat-card"
              key={item.id}
              to={`/chatlist/${item.name}`}
            >
              <span className="chat-title">{item.name}</span>
              <span className="chat-description">{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
