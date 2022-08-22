const express = require("express");
const app = express();
const productRouter = require("./routes/product");

app.use(express.json());

const PORT = 3000;

app.use(productRouter);

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running at http://localhost:${PORT}`);
  }
});
