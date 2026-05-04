const courseService = require("../services/courseService")

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAll()
    res.json(courses)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.getCourseById = async (req, res) => {
  try {
    const course = await courseService.getById(req.params.id)
    if (!course) return res.status(404).json({ error: "course not found" })
    res.json(course)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.createCourse = async (req, res) => {
  try {
    const created = await courseService.create(req.body)
    res.status(201).json(created)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
exports.updateCourse = async (req, res) => {
  try {
    const updated = await courseService.update(req.params.id, req.body)
    if (!updated) return res.status(404).json({ error: "course not found" })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.deleteCourse = async (req, res) => {
  try {
    const deleted = await courseService.remove(req.params.id)
    if (!deleted) return res.status(404).json({ error: "course not found" })
    res.json(deleted)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
