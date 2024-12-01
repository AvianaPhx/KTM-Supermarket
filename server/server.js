const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Your React frontend URL
  methods: ["POST", "GET"],
  credentials: true // Allow cookies and credentials
};
app.use(cors(corsOptions));

// MySQL Connection
const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Helper: Verify JWT Token Middleware
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not logged in" });
  } else {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not correct" });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};

// Register Route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ Error: 'Missing required fields' });
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ Error: "Hashing error" });

    const sql = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)";
    const values = [username, email, hash];

    db.query(sql, [values], (err, result) => {
      if (err) return res.status(500).json({ Error: "Database insertion error" });
      res.json({ Status: "Success" });
    });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM user WHERE email = ?", [email], (err, data) => {
    if (err) return res.json({ Error: "Database error" });
    if (data.length > 0) {
      bcrypt.compare(password, data[0].password, (err, response) => {
        if (response) {
          const token = jwt.sign({ username: data[0].username }, process.env.JWT_KEY, { expiresIn: '1d' });
          res.cookie('token', token, { httpOnly: true });
          res.json({ Status: "Success", username: data[0].username });
        } else {
          res.json({ Error: "Incorrect password" });
        }
      });
    } else {
      res.json({ Error: "No user found with that email" });
    }
  });
});

// Protected Route
app.get("/", verifyUser, (req, res) => {
  res.json({ Status: "Success", username: req.username });
});

// Logout Route
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ Status: 'Logged out successfully' });
});

// Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
