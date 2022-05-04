import React from "react";
import "./Main.css";
import { ChatsNav } from "./ChatsNav/ChatsNav";
import { ChatMessanger } from "./ChatMessanger/ChatMessanger";

export const Main = () => {
  return (
    <main className="main">
      <ChatsNav />
      <ChatMessanger />
    </main>
  );
};
