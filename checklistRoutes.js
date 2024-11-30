const express = require("express");
const { getChecklistResults } = require("./Controller.js");

const router = express.Router();

router.get("/checklist", getChecklistResults);

module.exports = router;
