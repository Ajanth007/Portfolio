const express = require("express");
const router = express.Router();
const { getSpecificTopic, getTopic } = require("../context/topicContext");

router.get("/",getTopic);

router.get("/:id/articles", getSpecificTopic);

module.exports = router;
