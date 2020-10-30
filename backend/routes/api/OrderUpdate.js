const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const Order = require('../../models/Order');
const ObjectId = require("mongodb").ObjectID;

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));

router.put('/', (req,res) => {
    Order.updateOne({_id:ObjectId(req.body._id)}, 
        {$set: {
            isApproved:"false"
        }
    }).then(res.send("Order Updated!"))
        .catch(res.send("Order Doesn't Updated"))
});

module.exports = router;