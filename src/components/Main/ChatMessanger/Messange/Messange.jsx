import React from "react";
import PropTypes from "prop-types";
import "./Messange.css";

export const Message = ({ author, text, date, time }) => {
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

Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
};
