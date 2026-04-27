const express = require("express");
const app = express();
const port = 8888;

const categoryController = require("./controller/category");
const transactionController = require("./controller/transaction");

app.use(express.json()); // podpora pro application/json
app.use(express.urlencoded({ extended: true })); // podpora pro application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/category", categoryController);
app.use("/transaction", transactionController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
