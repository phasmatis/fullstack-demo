const db = require("./client");

// GET ALL CANDIES
async function getAllCandy() {
  const { rows } = await db.query("SELECT * FROM candy");
  return rows;
}

// GET a single candy by its name
async function getCandyByName(name) {
  const { rows } = await db.query(
    `
    SELECT * FROM candy
    WHERE name = $1
    `,
    [name]
  );
  return rows[0]; // there should only be 1 entry so we return that one
}

module.exports = { getAllCandy, getCandyByName };
