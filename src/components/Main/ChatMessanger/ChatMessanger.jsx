import React, { useEffect, useState } from "react";
import { MessageRender } from "./MessageRender/MessageRender";
import { SnackBar } from "../../SnackBar/SnackBar";
import { FormUi } from "../../FormUi/FormUi";
import "./ChatMessanger.css";
import { nanoid } from "nanoid";
import { Container } from "@mui/material";

export const ChatMessanger = () => {
  const author = "Вы";
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSnackOpen, setSneckOpen] = useState(false);

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

  useEffect(() => {
    if (messageList.length) {
      const timer = setTimeout(() => {
        setSneckOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);
  return (
    <>
      <Container
        sx={{
          height: 600,
          bgcolor: "primary.main",
          borderRadius: 3,
          pt: 2,
        }}
      >
        <FormUi
          value={inputValue}
          onChange={(ev) => {
            setInputValue(ev.target.value);
          }}
          onSubmit={addMessage}
          type="submit"
        />
        <MessageRender messageList={messageList} />
      </Container>
      <SnackBar isOpen={isSnackOpen} handleClose={() => setSneckOpen(false)} />
    </>
  );
};
