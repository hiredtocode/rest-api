import express from "express";

const router = express.Router();

const users = [
	{
		firstName: "John",
		lastName: "Doe",
		age: 25,
	},
	{
		firstName: "Jane",
		lastName: "Doe",
		age: 19,
	},
];

router.get("/", (req, res) => {
	console.log("users:", users);
	res.send("Hello");
});

router.post("/", (req, res) => {
	console.log("POST ROUTE REACHED");
	res.send("POST ROUTE REACHED");
});

export default router;
