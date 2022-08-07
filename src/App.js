import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserInfo from "./components/pages/UserInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
