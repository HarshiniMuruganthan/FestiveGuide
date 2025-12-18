const Festival = require("../models/Festival");

exports.createFestival = async (req, res) => {
  const festival = await Festival.create(req.body);
  res.json(festival);
};

exports.getFestivals = async (req, res) => {
  const festivals = await Festival.find().sort({ date: 1 });
  res.json(festivals);
};

exports.updateFestival = async (req, res) => {
  const updated = await Festival.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteFestival = async (req, res) => {
  await Festival.findByIdAndDelete(req.params.id);
  res.json({ message: "Festival deleted" });
};
