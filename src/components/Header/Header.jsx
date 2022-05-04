import React from "react";
import "./Header.css";
import { Link } from "@material-ui/core";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">Лого здесь</div>
      <nav className="nav">
        <Link href="#">Link 1</Link>
        <Link href="#">Link 2</Link>
        <Link href="#">Link 3</Link>
      </nav>
    </header>
  );
};
