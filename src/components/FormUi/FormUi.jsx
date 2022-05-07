import React from "react";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, TextField, Typography } from "@mui/material";

export const FormUi = ({ value, onChange, type, onSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
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
          value={value}
          onChange={onChange}
        />
      </Box>

      <Button
        value={value}
        type={type}
        variant="contained"
        sx={{ ml: 3, height: 50, bgcolor: "#fff" }}
      >
        <ArrowForwardIosIcon sx={{ color: "#000" }}></ArrowForwardIosIcon>
      </Button>
    </Box>
  );
};

FormUi.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};
