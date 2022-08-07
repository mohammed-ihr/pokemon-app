import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/pages/Pokemon";
import UserInfo from "./components/pages/UserInfo";
import { PokemonProvider } from "./state/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
