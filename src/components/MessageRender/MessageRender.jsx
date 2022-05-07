import React from "react";
import { Message } from "../Message/Message";
import "./MessageRender.css";

export const MessageRender = (props) => {
  return (
    <div className="wrp">
      {props.messageList.length ? (
        <div className="message_box">
          {props.messageList.map((item) => (
            <Message
              author={item.author}
              text={item.text}
              date={item.date}
              time={item.time}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="no_message_block">
          <p className="no_message">Сообщений пока нет</p>
          <p className="no_message">Воспользуйтесь формой ниже.</p>
        </div>
      )}
    </div>
  );
};
