import React from "react";
import "./FormUi.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, TextField, Typography } from "@mui/material";

export const FormUi = (props) => {
  return (
    <Box
      component="form"
      onSubmit={props.onSubmit}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "2px solid #fff",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography variant="h5" component="span" sx={{ color: "#fff" }}>
          Введите ваше сообщение
        </Typography>
        <TextField
          variant="outlined"
          autoFocus={true}
          sx={{ bgcolor: "#fff" }}
          value={props.value}
          onChange={props.onChange}
        />
      </Box>

      <Button
        value={props.value}
        type={props.type}
        variant="contained"
        sx={{ ml: 3, height: 50, bgcolor: "#fff" }}
      >
        <ArrowForwardIosIcon sx={{ color: "#000" }}></ArrowForwardIosIcon>
      </Button>
    </Box>
  );
};
