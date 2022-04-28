import React, { Component } from "react";
import "./Message.css";

export class Message extends Component {
  constructor(props) {
    super(props);
    this.title = "React";
    this.text =
      "JavaScript-библиотека для создания пользовательских интерфейсов";
  }
  render() {
    return (
      <div className="block">
        <h3 className="title">{this.title}</h3>
        <p className="text">{this.text}</p>
      </div>
    );
  }
}
