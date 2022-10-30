import express from "express";
import {
	getUser,
	createUser,
	getUserWithId,
	deleteUser,
	updateUser,
} from "../controllers/requests.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getUserWithId);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
