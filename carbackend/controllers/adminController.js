const Bus = require("../models/Bus");
const Route = require("../models/Route");

// Add a new bus
exports.addBus = async (req, res) => {
  try {
    const bus = new Bus(req.body);
    await bus.save();
    res.status(201).json({ message: "Bus added successfully", bus });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update bus details
exports.updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a route
exports.addRoute = async (req, res) => {
  try {
    const route = new Route(req.body);
    await route.save();
    res.status(201).json({ message: "Route added successfully", route });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update route details
exports.updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(route);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
