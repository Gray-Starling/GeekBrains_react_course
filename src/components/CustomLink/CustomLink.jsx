import { React } from "react";
import PropTypes from "prop-types";
import { Link, useMatch } from "react-router-dom";
import "./CustomLink.css";

export const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  const pickColor = () => {
    if (match) {
      return "active event";
    } else return "disable event";
  };
  return (
    <Link className={pickColor()} to={to} {...props}>
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};
