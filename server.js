const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Database configuration using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,       // For Cloud SQL with Cloud Run: /cloudsql/INSTANCE_CONNECTION_NAME
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error("Error connecting to DB:", err.stack);
  } else {
    console.log("Connected to PostgreSQL DB");
    release();
  }
});

// Example API route
app.get("/api/movies", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies"); // your table
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Fallback route for static index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
