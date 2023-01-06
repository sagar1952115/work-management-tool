const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      retuired: true,
    },
    status: {
      type: String,
      default: "todos",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
