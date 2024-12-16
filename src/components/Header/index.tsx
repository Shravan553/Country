import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box, Button, Typography, useTheme } from "@mui/material";

const Header = ({ mode, toggleColorMode }: any) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 80,
        padding: 4,
        boxShadow: 3,
        background: theme.palette.background.paper,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: 18, fontWeight: 800 }}>
        Where in the world?
      </Typography>
      <Button
        onClick={toggleColorMode}
        color="inherit"
        startIcon={
          mode === "light" ? <DarkModeOutlinedIcon /> : <DarkModeIcon />
        }
      >
        <b>{mode === "light" ? "dark mode" : "light mode"}</b>
      </Button>
    </Box>
  );
};

export default Header;
