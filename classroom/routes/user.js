const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("Get users");
});

router.get("/:id", (req, res) => {
    res.send("Get users ID");
});

router.post("/", (req, res) => {
    res.send(" post User");
});

router.delete("/:id", (req, res) => {
    res.send(" post User Delete");
});

module.exports = router;