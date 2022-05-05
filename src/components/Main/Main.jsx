import React from "react";
import "./Main.css";
import { ChatsNav } from "./ChatsNav/ChatsNav";
import { ChatMessanger } from "./ChatMessanger/ChatMessanger";
import { Box } from "@mui/material";

export const Main = () => {
  return (
    <Box display="flex" sx={{ mt: 2 }}>
      <Box flexGrow={0}>
        <ChatsNav />
      </Box>
      <Box flexGrow={1}>
        <ChatMessanger />
      </Box>
    </Box>
  );
};
