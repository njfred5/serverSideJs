const authCheck = (req, res, next) => {
  const token = req.headers["authorization"]
  if (!token) {
    return res.status(401).json({ error: "no token, access denied" })
  }
  if (token !== "mysecrettoken") {
    return res.status(401).json({ error: "invalid token" })
  }
  next()
}
module.exports = authCheck
