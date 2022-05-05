import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Message } from "../Messange/Messange";

export const MessageRender = ({ messageList }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if (messageList.length && myRef && myRef.current) {
      myRef.current.scrollIntoView();
    }
  }, [messageList.length]);
  return (
    <Box
      sx={{
        color: "#000",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
        mt: 3,
      }}
    >
      {messageList.length ? (
        <div className="container_full">
          {messageList.map((item) => (
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
        <Typography variant="h6" component="span">
          Сообщений пока нет! Напишите что-нибудь в поле выше и нажмите Enter
        </Typography>
      )}
    </Box>
  );
};

MessageRender.propTypes = {
  messageList: PropTypes.func,
};
