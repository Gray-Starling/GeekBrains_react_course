import React from "react";
import "./FormUi.css";
import { Button, TextField } from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const FormUi = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="input">
        <TextField
          id="outlined-basic"
          variant="outlined"
          autoFocus={true}
          value={props.value}
          onChange={props.onChange}
          style={{ width: 900 }}
        />

        <Button
          value={props.value}
          type={props.type}
          variant="contained"
          sx={{ margin: "0 0 0 30px" }}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </Button>
      </div>
    </form>
  );
};
