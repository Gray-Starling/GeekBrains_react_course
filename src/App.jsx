import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ChatList } from "./pages/ChatList/ChatList";
import { Profile } from "./pages/Profile/Profile";
import { ChatPage } from "./components/ChatPage/ChatPage";

// import { Header } from "./components/Header/Header";
// import { Main } from "./components/Main/Main";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatlist/:title" element={<ChatPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <Header />
      <Main /> */}
    </>
  );
};
