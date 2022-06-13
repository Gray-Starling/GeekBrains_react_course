import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";
import "./Layout.css";
import { AuthStatusLayout } from "../AuthStatusLayout/AuthStatusLayout";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Real Chat</div>
        <div className="nav">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/chatlist">Chats</CustomLink>
          <CustomLink to="/profile">Profile</CustomLink>
          <CustomLink to="/count">Count</CustomLink>
          <CustomLink to="/react-api">React Api</CustomLink>
          <AuthStatusLayout />
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
