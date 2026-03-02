import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Ticket() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#12061f] to-black text-white">
      <Navbar />

      <div className="flex justify-center pt-24 px-6">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">
            🎉 Payment Successful
          </h1>

          <p className="text-gray-400 mb-6">
            Your booking has been confirmed.
          </p>

          <div className="text-left space-y-2 text-sm">
            <p><strong>Name:</strong> {state.name}</p>
            <p><strong>Email:</strong> {state.email}</p>
            <p><strong>Phone:</strong> {state.phone}</p>
            <p><strong>Tickets:</strong> {state.tickets}</p>
            <p><strong>Payment:</strong> {state.payment}</p>
            <p>
              <strong>Booking ID:</strong>{" "}
              FG-{Math.floor(Math.random() * 100000)}
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            📧 Ticket has been sent to your email
          </p>
        </div>
      </div>
    </div>
  );
}
