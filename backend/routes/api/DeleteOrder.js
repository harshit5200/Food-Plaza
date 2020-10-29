const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const Order = require('../../models/Order');
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));

router.delete('/', (req,res) => {
    Order.deleteOne({_id:ObjectId(req.body._id)})
    .then(console.log("Order Deleted!"))
    .catch(console.log("Order Doesn't Deleted"))

});

module.exports = router;