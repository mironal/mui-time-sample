import React from "react";
import "./App.css";
import {
  Box,
  CircularProgress,
  Container,
  createTheme,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { green, purple } from "@mui/material/colors";

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
