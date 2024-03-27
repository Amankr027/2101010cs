const express = require("express");
const app = express();
const mongoose = require("mongoose");
const testReg = require("./routes/Register");
const testAuth = require("./routes/Auth");


// const productRoute = require("./routes/product");
const cors = require("cors");


mongoose
  .connect("mongodb+srv://aman_project:aman_project27@cluster0.gswd3ex.mongodb.net/shop?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/test", testReg);
app.use("/test", testAuth);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});



// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3000;


// const products = [
//   {
//     productName: "Laptop 1",
//      price: 226,
//       rating: 4.5,
//     discount: 53,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 16",
//      price: 2236,
//       rating: 2.7,
//     discount: 60,
//     availability: "out-of-stock"
//   },

//   {
//     productName: "Laptop 15",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 14",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 9",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 10",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 11",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 13",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   },

//   {
//     productName: "Laptop 12",
//      price: 2236,
//       rating: 4.7,
//     discount: 63,
//     availability: "yes"
//   }
// ];


// app.use(express.json());


// app.get('/categories/:categoryname/products', (req, res) => {
//   try {
//     const { categoryname } = req.params;
//     const n = parseInt(req.query.top) || 10; 
//     const minPrice = parseFloat(req.query.minPrice) || 0;
//     const maxPrice = parseFloat(req.query.maxPrice) || Infinity;


//     const filteredProducts = products.filter(
//       (product) => product.price >= minPrice && product.price <= maxPrice
//     );

//     const sortedProducts = filteredProducts.sort(
//       (a, b) => b.rating - a.rating
//     );

 
//     const page = parseInt(req.query.page) || 1;
//     const startIdx = (page - 1) * n;
//     const paginatedProducts = sortedProducts.slice(startIdx, startIdx + n);

//     res.json(paginatedProducts);
//   } catch (error) {
//     console.error('Error fetching products:', error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
