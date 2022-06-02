import React from "react";
import { useParams, Link } from "react-router-dom";
import { chatListArray } from "../constants/chatListArray";
import { Massenger } from "../Massenger/Massenger";

import "./ChatPage.css";

export const ChatPage = () => {
  const { title } = useParams();
  return (
    <div className="chat-page">
      <div className="chat-page-nav">
        {/* <p className="chat-page-title">List of our chats</p> */}
        <div className="chat-page-list">
          {chatListArray.map((item) => (
            <Link
              className="chat-page-link"
              key={item.id}
              to={`/chatlist/${item.name}`}
            >
              <span className="chat-page-item">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="main">
        <Massenger title={title} />
      </div>
    </div>
  );
};
