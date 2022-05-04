import React from "react";
import { chatList } from "./constants";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    backgroundColor: "#000",
    width: "300px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
  },
  typography: {
    color: "#fff",
  },
});

export const ChatsNav = () => {
  const style = useStyles();
  return (
    <List className={style.list}>
      <Typography className={style.typography} component="span" variant="h5">
        Список чатов
      </Typography>
      {chatList.map((item) => (
        <ListItem key={item.id}>
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
