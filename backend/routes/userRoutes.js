import express from "express";
import { create, deleteUser, getAllUsers, getByUserID, update } from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);

route.get("/", getAllUsers);

route.get("/user/:id", getByUserID);

route.put("/user/update/:id", update);

route.delete("/user/delete/:id", deleteUser);




export default route;