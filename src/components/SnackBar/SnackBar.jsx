import { Snackbar, Alert } from "@mui/material";
import React from "react";

export const SnackBar = ({ isOpen, handleClose }) => {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Сообщение отправленно!</Alert>
    </Snackbar>
  );
};
