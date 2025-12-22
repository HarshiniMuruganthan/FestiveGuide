import { useState } from "react";
import api from "../services/api";

export default function BookTicket() {
  const [data, setData] = useState({});

  const book = async () => {
    await api.post("/bookings/book", data);
    alert("Booking confirmed. Email sent.");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-royal p-8 rounded-xl w-96">
        <h2 className="text-2xl text-gold mb-4">Book Ticket</h2>
        <input className="w-full mb-2 p-2 text-black" placeholder="Festival"
          onChange={(e) => setData({ ...data, festival: e.target.value })} />
        <input className="w-full mb-2 p-2 text-black" placeholder="Location"
          onChange={(e) => setData({ ...data, location: e.target.value })} />
        <input className="w-full mb-2 p-2 text-black" placeholder="Tickets"
          onChange={(e) => setData({ ...data, ticketCount: e.target.value })} />
        <input className="w-full mb-4 p-2 text-black" placeholder="Your Email"
          onChange={(e) => setData({ ...data, email: e.target.value })} />
        <button onClick={book} className="bg-gold w-full py-2 text-black">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
