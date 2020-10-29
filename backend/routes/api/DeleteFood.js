const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const Food = require('../../models/Food');
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));

router.delete('/', (req,res) => {
    Food.deleteOne({_id:ObjectId(req.body._id)})
    .then(console.log("Food Deleted!"))
    .catch(console.log("Food Doesn't Deleted"))

});

module.exports = router;