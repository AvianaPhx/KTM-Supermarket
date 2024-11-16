const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json());

//Import Cors
const cors = require("cors");
const corsOptions = {origin: ["http://localhost:5173"]};
app.use(cors(corsOptions));

//Import Environment Variable 
const dotenv = require("dotenv");
dotenv.config({ path: './.env'});
const PORT = process.env.PORT;

const products = require("./data/Products")
const salt = 10;

// Import mySQL
const mysql = require("mysql");


//Connection of Database
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST, // IP Address of the server that will be hosted on
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});


app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  //Validate requried fields
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Hash the password
  bcrypt.hash(password, salt, (err, hash) => {
    if(err) { 
      return res.status(500).json({ Error: "Error hashing password", details: err });
    }

    // SQL insertion after password hashing
    const sql = "INSERT INTO user (`username` ,`email`,`password`) VALUES (?)";
    const values = [username, email, hash];

    db.query(sql, [values], (err, result) => {
      if(err) {
        // Log the actual MySQL error for debugging
        console.error('MySQL error:', err);
        return res.status(500).json({ Error: "Inserting data Error in server", details: err.message });
      }
      return res.json({Status: "Success"});
    });
  });
});

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM user WHERE email = ?';
  db.query(sql, [req.body.email], (err, data) => {
    if(err ) return res.json({Error: "Login error in server"});
    if(data.length > 0) {
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
        if(err) return res.json ({Error: "Password compare error"});
        if(response) {
          return res.json({Status: "Success"});
        } else {
          return res.json({Error: "Password not matched"});
        }
      })
    } else {
      return res.json({Error: "No email found"});
    }
  })
})

// TO Check is the server is running on the PORT
app.listen(PORT || 9000, () => {
  console.log(`server listening on port ${PORT}`);
});











// TO CHECK THE CONNECTION BETWEEN THE mySQL AND BACKEND
// db.connect( (error) =>{
//   if(error){
//     console.log(error)
//   }else{
//     console.log("mySQL Connected...")
//   }
// })



// API TEST PRODUCT
// app.get("/server/products", (req, res) => {
//   res.json(products)
// });

// app.get("/server/products/:id", (req, res) => {
//   const product = products.find((product)=>product.id == req.params.id)
//   res.json(product)
// });