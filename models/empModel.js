const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    min: 16,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  subjects: {
    type: [String],
    //custom validation
    validate: {
      validator: (s) => s.length != 0,
      message: (props) => "subject list can't be empty",
    },
  },
});

module.exports = mongoose.model("Emp", empSchema);
