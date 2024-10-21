const express = require("express");
const router = express.Router();

// post user

router.get("/", (req, res) => {
    res.send("Get post");
});

router.get("/:id", (req, res) => {
    res.send("Get post  ID");
});

router.post("/", (req, res) => {
    res.send(" post User");
});

router.delete("/:id", (req, res) => {
    res.send(" post User Delete");
});

module.exports = router;