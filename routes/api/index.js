const router = require("express").Router();
const itemRoutes = require("./items");

// items routes
router.use("/items", itemRoutes);

module.exports = router;


