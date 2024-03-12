const express = require("express");
const candyRouter = express.Router();
const { getAllCandy, getCandyByName } = require("../db/candy");

// /api/candy routes
candyRouter.get("/", async (req, res, next) => {
  try {
    const candy = await getAllCandy();

    res.send(candy);
  } catch (err) {
    next(err);
  }
});

// ----- /api/candy/:name

candyRouter.get("/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const candy = await getCandyByName(name);
    if (!candy) {
      res.status(404).send("No candy found");
    } else {
      res.send(candy);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = candyRouter;
