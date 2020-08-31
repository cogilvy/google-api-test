const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let locationSchema = new Schema(
  {
    lat: {
      type: Schema.Types.Decimal128,
    },
    long: {
      type: Schema.Types.Decimal128,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Location", locationSchema);
