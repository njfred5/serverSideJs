const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: false,
  },
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
