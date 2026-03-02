import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BookTickets() {
  const { festivalId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
    payment: "upi",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/bookings/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          festival: "Diwali",
          location: "India",
          ticketCount: Number(formData.tickets),
          email: formData.email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Booking failed");
        setLoading(false);
        return;
      }

      // 🎟 Navigate to Ticket page instead of alert
      navigate("/ticket", {
        state: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tickets: formData.tickets,
          payment: formData.payment,
          festival: "Diwali",
          location: "India",
          bookingId: data.booking?._id || "FG-" + Date.now(),
        },
      });

    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#12061f] to-black text-white">
      <Navbar />

      <div className="px-6 md:px-16 pt-24 flex justify-center">
        <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2">🎟️ Book Tickets</h1>
          <p className="text-gray-400 mb-8">
            Fill in your details to confirm your festival booking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Number of Tickets
              </label>
              <input
                type="number"
                min="1"
                name="tickets"
                value={formData.tickets}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Payment Method
              </label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500"
              >
                <option value="upi">UPI</option>
                <option value="card">Debit / Credit Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="cod">Pay at Venue</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-6 py-3 rounded-xl font-semibold text-lg transition
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                }`}
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Festival ID: {festivalId}
          </p>
        </div>
      </div>
    </div>
  );
}