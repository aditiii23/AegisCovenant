const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://aegiscovenent-server.onrender.com"
    : "http://localhost:5000"

export { apiUrl }
