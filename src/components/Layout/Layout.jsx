import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";
import "./Layout.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";
import { useLogoutFunc } from "../../hooks/useLogoutFunc";

export const Layout = () => {
  const user = useSelector(userSelector);
  const { logOutFunctionHook } = useLogoutFunc();
  return (
    <>
      <header className="header">
        <div className="logo">Real Chat</div>
        <div className="nav">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/chatlist">Chats</CustomLink>
          <CustomLink to="/count">Count</CustomLink>
          <CustomLink to="/react-api">React Api</CustomLink>
          <CustomLink to="/profile">Profile</CustomLink>
          {user ? (
            <CustomLink to="/login" onClick={logOutFunctionHook}>
              Выход
            </CustomLink>
          ) : (
            <>
              <CustomLink to="/login">Login</CustomLink>
              <CustomLink to="/register">Sign Up</CustomLink>
            </>
          )}
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
