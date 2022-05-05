import React from "react";
import { chatList } from "./constants";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

export const ChatsNav = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        ml: 1,
        width: 300,
        borderRadius: 3,
        border: "5px solid #0059B2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <List>
        <Typography component="span" variant="h5">
          Список чатов
        </Typography>
        <Divider sx={{ height: 5, bgcolor: "#0059B2", mt: 1 }} />
        {chatList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
