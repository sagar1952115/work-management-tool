const router = require("express").Router();
const User = require("../model/user");
const Todo = require("../model/todo");

//get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    const tasks = {
      todos: [],
      inProgress: [],
      completed: [],
    };

    todos.forEach((task) => {
      tasks[task.status].push(task);
    });
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

//create a todo
router.post("/", async (req, res) => {
  try {
    const newTodo = await new Todo(req.body);
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (e) {
    console.log("happen");
    res.status(500).send(e);
  }
});

//update a todo
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json("No such todo");
    await todo.updateOne({ $set: req.body });
    res.status(200).json("Sucessfully updated");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

//delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json("No such todo");
    await todo.deleteOne();
    res.status(200).json("Sucessfully deleted");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
