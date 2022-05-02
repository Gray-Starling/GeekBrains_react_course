import React, { FC } from "react";
import "./Message.css";
export interface MessageProps {
  author: string;
  text: string;
  date: string;
  time: string;
}

export const Message: FC<MessageProps> = ({ author, text, date, time }) => {
  return (
    <div className="msg_block">
      <div className="msg_header">
        <div className="msg_author">
          Автор:
          <span className="msg_author_user"> {author}</span>
        </div>
      </div>
      <div className="msg_text">{text}</div>
      <div className="msg_footer">
        <div className="msg_send_time">
          {date} {time}
        </div>
      </div>
    </div>
  );
};
