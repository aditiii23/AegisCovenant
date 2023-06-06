const apiUrl =
  process.env.NODE_ENV === "production" ? null : "http://localhost:5000"

export { apiUrl }
