const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Task = require("../models/task.model");

// get all tasks
router.get("/", authenticate, async (req, res) => {
  try {
    const params = req.query;
    // console.log(params);
    if (params.filter === "completed" || params.filter === "pending") {
      if (params.filter === "completed") {
        const tasks = await Task.find({
          $and: [
            { shopId: req.body.shopId },
            { userId: req.body.userId },
            { completed: true },
          ],
        })
          .sort({ createdAt: -1 })
          .limit(10)
          .lean()
          .exec();
        // console.log(tasks);
        return res.status(200).send({ data: tasks, message: "success" });
      } else {
        const tasks = await Task.find({
          shopId: req.body.shopId,
          userId: req.body.userId,
          completed: false,
        })
          .sort({ createdAt: -1 })
          .limit(10)
          .lean();
        return res.status(200).send({ data: tasks, message: "success" });
      }
    }
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
      return res.status(200).send({ data: tasks, message: "success" });
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

// filtering task with payment pending or completed

// create a task
router.post("/", authenticate, async (req, res) => {
  try {
    // console.log("req", req.body);
    const task = await Task.create(req.body);
    return res.status(200).send({ message: "success", data: task });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

// update a task
router.post("/:id", authenticate, async (req, res) => {
  try {
    // console.log("req", req.body);
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({ message: "success", data: task });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router;
