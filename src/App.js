import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/DashBoard";
import Cart from "./Components/Cart";
import NavBar1 from "./Components/NavBar1";

function App() {
  return (
    <div className="App">
      <NavBar1 />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
