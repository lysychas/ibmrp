const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema(
  {
    imgUrl: { type: String ,required: true},
    foundObjects: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", QuerySchema);
