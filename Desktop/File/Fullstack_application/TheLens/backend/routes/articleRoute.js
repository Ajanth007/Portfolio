const express = require("express");
const router = express.Router();

const { getArticle, specificID } = require("../context/articleContext");

router.get("/", getArticle);

router.get("/:id", specificID);

module.exports = router;
