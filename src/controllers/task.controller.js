const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Task = require("../models/task.model");

// get all tasks
router.get("/", authenticate, async (req, res) => {
  try {
    const tasks = await Task.find({
      shopId: req.body.shopId,
      userId: req.body.userId,
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean()
      .exec();
    if (tasks.length === 0) {
      return res.status(400).send({ message: "No task pending" });
    } else {
      return tasks;
    }
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

// get single task
router.get("/:id", authenticate, async (req, res) => {
  try {
    const tasks = await Task.findById({
      _id: req.params.id,
    })
      .lean()
      .exec();
    if (tasks.length === 0) {
      return res.status(400).send({ message: "No task pending" });
    } else {
      return tasks;
    }
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

// create a task
router.post("/", authenticate, async (req, res) => {
  try {
    const task = await Task.create(req.body);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router;
