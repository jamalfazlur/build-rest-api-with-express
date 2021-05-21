import express from "express";
import * as user from "./user.js"

const router = express.Router();

router.get("/user", user.list) //list
router.post("/user", user.create) //create
router.get("/user/:id", user.read) //read
router.post("/user/:id", user.update) //update
router.delete("/user/:id", user.deleteUser) //delete

export default router;