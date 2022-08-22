const express = require("express");
const productRouter = express.Router();
const products = require("../db.json");
const fs = require("fs");
const { v4: uuidv4, v4 } = require('uuid');


// Create - POST - /products/create - add product
// Read - GET - /products - Should be able get all the products present;
// Update - PUT/PATCH - /products/:productId - modify the product of the given product ID
// Delete - DELETE - /products/:productId - delete the product 

productRouter.get("/products", (req, res) => {
  res.status(200).send(products);
});

//Bugs
// productRouter.post("/products/create", (req, res) => {
//   const add = {
//     id: v4(),
//     name: req.body.name,
//     price: req.body.price,
//   };
  
//   products.products.save(add);
//   res.status(200).send(products);
// });


// productRouter.delete("/products/:productId", (req, res) => {
//   );
// });

// productRouter.patch("/products/:productId", (req, res) => {
//   if (err) {
   
//   } else {
//     }
// });

module.exports = productRouter;
