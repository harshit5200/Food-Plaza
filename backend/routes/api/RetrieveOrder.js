const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const Order = require('../../models/Order');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(cors());

router.get('/', (req, res) => {
    Order.find({}).then(orderList => {
        if(orderList){
            res.send(orderList)
        }
    })
    .catch(() => {
        res.send("Getting Error in Fetching Order From Database!")
    })
})

module.exports = router;
