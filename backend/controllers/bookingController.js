const Booking = require("../models/Booking");
const User = require("../models/User");
const { sendConfirmationEmail } = require("./emailController");

exports.bookTicket = async (req, res) => {
  try {
    const { festival, location, ticketCount, email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 1️⃣ Save booking first
    const booking = await Booking.create({
      user: user._id,
      festival,
      location,
      ticketCount,
      totalAmount: ticketCount * 499,
      status: "CONFIRMED",
    });

    // 2️⃣ Respond immediately
    res.status(201).json({
      message: "Booking confirmed successfully",
      booking,
    });

    // 3️⃣ Send real email (non-blocking)
    sendConfirmationEmail(user, booking);

  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
