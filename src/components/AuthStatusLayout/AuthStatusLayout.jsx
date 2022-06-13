import React from "react";
import { useSelector } from "react-redux";
import { CustomLink } from "../CustomLink/CustomLink";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";
import { useLogoutFunc } from "../../hooks/useLogoutFunc";

export const AuthStatusLayout = () => {
  const user = useSelector(userSelector);
  const { logOutFunctionHook } = useLogoutFunc();

  if (!user) {
    return (
      <>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/register">Sign Up</CustomLink>
      </>
    );
  } else {
    return (
      <>
        <CustomLink to="/login" onClick={logOutFunctionHook}>
          Выход
        </CustomLink>
      </>
    );
  }
};
