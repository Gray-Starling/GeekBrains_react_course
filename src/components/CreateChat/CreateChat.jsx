import React from "react";
import PropTypes from "prop-types";

export const CreateChat = ({ onSubmit, onChange, value }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="chat-page-form">
        <input
          placeholder="name of your chat"
          type="text"
          name={value}
          value={value}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

CreateChat.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
