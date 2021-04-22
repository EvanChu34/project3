const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const Item = require("./models/item")


router.route("/report").post((req, res) => {
  const item = req.body.item;
  const author = req.body.author;
  const description = req.body.description;
  const location = req.body.location;
  const date = req.body.date;
  const newItem = new Item ({
    item,
    author,
    description,
    location,
    date
  });

  newItem.save();
})

// API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
