const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  name: String,
  seats: Number,
  availableSeats: Number,
  route: { type: mongoose.Schema.Types.ObjectId, ref: "Route" },
  price: Number
});

module.exports = mongoose.model("Bus", busSchema);
