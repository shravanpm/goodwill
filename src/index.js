const express = require("express");
const userController = require("./controllers/user.controller");
const shopController = require("./controllers/shop.controller");
const shopCustomerController = require("./controllers/shopCustomer.controller");
const taskController = require("./controllers/task.controller");
const cors = require("cors");
const { register, login } = require("./controllers/auth.controller");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static("views"))

app.use("/api/admin", userController);
app.use("/api/user", userController);
app.post("/api/register", register);
app.post("/api/login", login);
app.use("/api/shop", shopController);
app.use("/api/shopcustomer", shopCustomerController);
app.use("/api/task", taskController);

module.exports = app;
