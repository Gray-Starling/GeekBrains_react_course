import React, { useRef, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Message } from "../Messange/Messange";
import "./MessageRender.css";

export const MessageRender = (props) => {
  const myRef = useRef(null);

  useEffect(() => {
    if (props.messageList.length && myRef && myRef.current) {
      myRef.current.scrollIntoView();
    }
  }, [props.messageList.length]);
  return (
    <Paper elevation={3}>
      {props.messageList.length ? (
        <div className="container_full">
          {props.messageList.map((item) => (
            <Message
              author={item.author}
              text={item.text}
              date={item.date}
              time={item.time}
              key={item.id}
            />
          ))}
          <span ref={myRef}></span>
        </div>
      ) : (
        <div className="container">
          <div className="empty_msg">
            Сообщений пока нет! Напишите что-нибудь в поле выше и нажмите Enter
          </div>
        </div>
      )}
    </Paper>
  );
};
