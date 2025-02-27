const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus" },
  seatsBooked: Number,
  status: { type: String, enum: ["Booked", "Cancelled"], default: "Booked" }
});

module.exports = mongoose.model("Booking", bookingSchema);
