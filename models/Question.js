
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
  QuestionStatement: {
    type: String,
    required: true,
    unique: true
  },
  Option1: {
    type: String,
    required: true
  },
  Option2: {
    type: String,
    required: true
  },
  Option3: {
    type: String,
    required: true
  },
  Option4: {
    type: String,
    required: true
  },
  Marks: {
    type: Number,
    required: true
  },
  Answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('question', QuestionSchema);