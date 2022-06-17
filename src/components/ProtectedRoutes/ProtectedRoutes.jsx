import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/reducers/userReducer/userSelectors";
import { LoadingToRedirect } from "../LoadingToRedirect/LoadingToRedirect";

export const ProtectedRoutes = ({ children }) => {
  const user = useSelector(userSelector);
  return <>{!user ? <LoadingToRedirect /> : children}</>;
};

ProtectedRoutes.propTypes = {
  to: PropTypes.string,
  children: PropTypes.object,
};
