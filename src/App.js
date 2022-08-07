import './App.css';
import UserInfo from './components/pages/UserInfo';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
     <Routes>
        <Route path="/" element={<UserInfo/>} />
      </Routes>
    
  );
}

export default App;
