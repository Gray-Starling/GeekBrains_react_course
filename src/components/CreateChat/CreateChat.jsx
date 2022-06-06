import React from "react";
import PropTypes from "prop-types";

/**
 * Создает новый чат
 * @param {*} onSubmit - пропс функция срабатывающая при submit
 * @param {*} onChange - пропс функция реагирующая на изменение инпута
 * @param {*} value - пропс, значение инпута(название чата)
 */
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
