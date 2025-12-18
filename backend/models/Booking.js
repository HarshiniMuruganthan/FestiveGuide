const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  festival: { type: String, required: true },       // <-- use String instead of ObjectId
  location: { type: String, required: true },
  ticketCount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "CONFIRMED" },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
