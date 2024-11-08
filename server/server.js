const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./data/Products")
dotenv.config()
const corsOptions = {
  origin: ["http://localhost:5173"]
};
app.use(cors(corsOptions));
const PORT = process.env.PORT;
const mysql = require('mysql');


//Connection of Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ktm_supermarket"
})

app.get("/product", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})


app.listen(PORT || 9000, () => {
  console.log(`server listening on port ${PORT}`);
});




// API TEST PRODUCT
// app.get("/server/products", (req, res) => {
//   res.json(products)
// });

// app.get("/server/products/:id", (req, res) => {
//   const product = products.find((product)=>product.id == req.params.id)
//   res.json(product)
// });