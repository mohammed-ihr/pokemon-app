import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/pages/Pokemon";
import UserInfo from "./components/pages/UserInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserInfo />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
