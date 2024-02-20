const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workshopSchema = new Schema({
  name: String,
  description: String,
  date: String,
});

module.exports = mongoose.model("Workshop", workshopSchema);