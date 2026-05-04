const Course = require("../models/courseModel")
exports.getAll = async () => {
  return await Course.find()
}
exports.getById = async (id) => {
  return await Course.findById(id)
}
exports.create = async (data) => {
  const course = new Course(data)
  return await course.save()
}
exports.update = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true })
}
exports.remove = async (id) => {
  return await Course.findByIdAndDelete(id)
}
