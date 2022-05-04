import React from "react";
import "./FormUi.css";
import { Button, TextField } from "@material-ui/core";

export const FormUi = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        autoFocus={true}
        value={props.value}
        onChange={props.onChange}
        sx={{ width: "600px" }}
      />
      <Button
        value={props.value}
        type={props.type}
        variant="contained"
        sx={{ margin: "0 0 0 30px" }}
      >
        Отправить
      </Button>
    </form>
  );
};
