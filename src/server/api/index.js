const express = require("express");
const router = express.Router();

// /api
router.get("/", (req, res) => {
  res.send("In the /api routes");
});

// for all routes /api/candy, use the candy router

router.use("/candy", require("./candy"));

module.exports = router;
