const express = require("express");
const { searchBuses, bookBus, cancelBooking } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/search", searchBuses);
router.post("/book", authMiddleware, bookBus);
router.delete("/cancel/:id", authMiddleware, cancelBooking);

module.exports = router;
