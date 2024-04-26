import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Prem from "./pages/Prem";
import Champ from "./pages/Champ";
import Cup from "./pages/Cup";
import Alltime from "./pages/Alltime";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/prem" element={<Prem />} />
      <Route path="/champ" element={<Champ />} />
      <Route path="/cup" element={<Cup />} />
      <Route path="/allTime" element={<Alltime />} />
    </Routes>
  );
}

export default App;
