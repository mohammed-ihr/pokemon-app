import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Confirmation from "./components/pages/Confirmation";
import Pokemon from "./components/pages/Pokemon";
import UserInfo from "./components/pages/UserInfo";
import { PokemonProvider } from "./state/PokemonContext";
import { UserProvider } from "./state/UserContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CC0000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "#FFDE00",
          border: "4px solid #CC0000",
          "&:hover": {
            color: "#FFDE00",
            border: "4px solid #FFDE00",
            fontWeight: "bold",
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "monospace",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <UserProvider>
      <PokemonProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<UserInfo />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </ThemeProvider>
      </PokemonProvider>
    </UserProvider>
  );
}

export default App;
