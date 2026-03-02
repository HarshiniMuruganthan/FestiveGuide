import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookTickets from "./pages/BookTickets";
import Ticket from "./pages/Ticket";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book/:festivalId" element={<BookTickets />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  );
}
