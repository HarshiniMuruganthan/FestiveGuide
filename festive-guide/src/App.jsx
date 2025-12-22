import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Festivals from "./pages/Festivals";
import BookTicket from "./pages/BookTicket";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/book" element={<BookTicket />} />
      </Routes>
    </>
  );
}
