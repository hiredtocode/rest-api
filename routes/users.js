import express from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
	res.send(users);
});

router.post("/", (req, res) => {
	const user = req.body;

	users.push({ ...user, id: uuid() });

	res.send(
		`User with the name ${user.firstName} added to the databse!`
	);
});

export default router;
