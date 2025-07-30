const express = require("express");
const {
  register,
  getAll,
  login,
  deleteUser,
  updateUser,
  getUserById
} = require("../controller/user.js");
const routesAuth = require("../middleware/RouteAuth.js");
const userRouter = express.Router();

userRouter.post("/", register);
userRouter.get("/", routesAuth, getAll);
userRouter.post("/auth/login", login);
userRouter.delete("/:id", routesAuth, deleteUser);
userRouter.put("/:id", routesAuth, updateUser);
userRouter.get("/:id", routesAuth, getUserById);

module.exports = userRouter;
