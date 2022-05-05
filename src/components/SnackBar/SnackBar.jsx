import React from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";

export const SnackBar = ({ isOpen, handleClose }) => {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Сообщение отправленно!</Alert>
    </Snackbar>
  );
};

SnackBar.propTypes = {
  isOpen: PropTypes.func,
  handleClose: PropTypes.func,
};
