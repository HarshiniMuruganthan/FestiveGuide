const express = require("express");
const {
  createFestival,
  getFestivals,
  updateFestival,
  deleteFestival
} = require("../controllers/festivalController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getFestivals);
router.post("/", protect, adminOnly, createFestival);
router.put("/:id", protect, adminOnly, updateFestival);
router.delete("/:id", protect, adminOnly, deleteFestival);

module.exports = router;
