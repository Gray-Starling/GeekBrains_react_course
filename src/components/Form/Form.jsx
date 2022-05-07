import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <Input value={props.value} onChange={props.onChange} />
      <Button value={props.value} type={props.type}>
        Отправить
      </Button>
    </form>
  );
};
