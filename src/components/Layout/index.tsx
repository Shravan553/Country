import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";

const Layout = ({ mode, children }: any) => {
  const getDesignTokens = (mode: any) => ({
    palette: {
      mode,
      primary: {
        ...(mode === "dark"
          ? {
              main: "hsl(209, 23%, 22%)",
            }
          : {
              main: "hsl(0, 0%, 100%)",
            }),
      },
      ...(mode === "dark"
        ? {
            background: {
              default: "hsl(207, 26%, 17%)",
              paper: "hsl(209, 23%, 22%)",
            },
          }
        : {
            background: {
              default: "hsl(0, 0%, 98%)",
              input: "hsl(0, 0%, 100%)",
            },
          }),
      text: {
        ...(mode === "light"
          ? {
              primary: "hsl(200, 15%, 8%)",
              secondary: "hsl(200, 15%, 8%)",
            }
          : {
              primary: "hsl(0, 0%, 100%)",
            }),
      },
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
