const Bus = require("../models/Bus");
const Booking = require("../models/Booking");

// Search available buses
exports.searchBuses = async (req, res) => {
  try {
    const { from, to } = req.query;
    const buses = await Bus.find({}).populate("route");
    res.json(buses.filter(bus => bus.route.from === from && bus.route.to === to));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Book a bus
exports.bookBus = async (req, res) => {
  try {
    const { busId, seats } = req.body;
    const bus = await Bus.findById(busId);

    if (bus.availableSeats < seats) return res.status(400).json({ message: "Not enough seats available" });

    bus.availableSeats -= seats;
    await bus.save();

    const booking = new Booking({ user: req.user.id, bus: busId, seatsBooked: seats });
    await booking.save();

    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Cancel booking
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = "Cancelled";
    await booking.save();

    res.json({ message: "Booking cancelled", booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
