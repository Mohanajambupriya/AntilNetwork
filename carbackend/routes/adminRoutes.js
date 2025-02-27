const express = require("express");
const { addBus, updateBus, addRoute, updateRoute } = require("../controllers/adminController");
const router = express.Router();

router.post("/bus", addBus);
router.put("/bus/:id", updateBus);
router.post("/route", addRoute);
router.put("/route/:id", updateRoute);

module.exports = router;
