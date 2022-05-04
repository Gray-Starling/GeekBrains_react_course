import React from "react";
import "./Header.css";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    color: "#fff",
    textDecoration: "none",
  },
});

export const Header = () => {
  const style = useStyles();
  return (
    <header className="header">
      <div className="logo">Лого здесь</div>
      <nav className="nav">
        <Link className={style.link} href="#">
          Link 1
        </Link>
        <Link className={style.link} href="#">
          Link 2
        </Link>
        <Link className={style.link} href="#">
          Link 3
        </Link>
      </nav>
    </header>
  );
};
