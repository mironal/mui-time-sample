import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import green from "@mui/material/colors/green";
import purple from "@mui/material/colors/purple";
import createTheme from "@mui/system/createTheme";

import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>Test</Typography>
        <Box>
          <CircularProgress />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
