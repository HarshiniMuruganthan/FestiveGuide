import { bookTicket } from "../api/booking.api";

export default function Book() {
  const handleBook = async () => {
    await bookTicket({
      festival: "Diwali Festival",
      location: "Chennai",
      ticketCount: 2,
      email: "user@email.com"
    });
    alert("Booking Confirmed!");
  };

  return (
    <button onClick={handleBook} className="bg-primary px-6 py-3 rounded">
      Confirm Booking
    </button>
  );
}
