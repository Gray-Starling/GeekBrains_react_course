import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ChatList } from "./pages/ChatList/ChatList";
import { Profile } from "./pages/Profile/Profile";
import { ChatPage } from "./components/ChatPage/ChatPage";
import { Count } from "./pages/Count/Count";
import { ReactApi } from "./pages/ReactApi/ReactApi";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { AddProfile } from "./components/AddProfile/AddProfile";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatlist/:title" element={<ChatPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route path="/count" element={<Count />} />
          <Route path="/react-api" element={<ReactApi />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/add_profile/:userName"
            element={
              <ProtectedRoutes>
                <AddProfile />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
