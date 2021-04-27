const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const Item = require("../models/item")


router.route("/items").post((req, res) => {
  const item = req.body.item;
  const author = req.body.author;
  const description = req.body.description;
  const location = req.body.location;
  const status = req.body.status;
  const date = req.body.date;
  const newItem = new Item ({
    item,
    author,
    description,
    location,
    status,
    date
  });

  newItem.save();
})

router.get("/testSave", (req, res) => {
  console.log('We hit the route!! saveee')
  const item = 'laptop'
  const author = 'Joe';
  const description = 'apple'
  const location = {lat: 40.23829495163714, lng: -73.49643585205078};
  
  const newItem = new Item ({
    item,
    author,
    description,
    location,
    status,
    
  });

  newItem.save();
})

router.get('/items', function(req,res) {
  Item.find({}, function(err, items) {
    res.json(items)
  })
})
// API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
