import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boxs from "./pages/Boxs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Transaction from "./pages/Transaction";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={ <Boxs /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/box/:boxId" element={ <Transaction /> } />
        z</Routes>   
      </BrowserRouter>
    </>
  )
}

export default App
