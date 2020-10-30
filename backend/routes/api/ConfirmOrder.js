const express = require('express');
const Order = require('../../models/Order');
const cors = require("cors");

const router = express.Router();

const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(fileUpload());
router.use(cors());

router.post('/', (req,res) => {
    const {userID, foodID, orderQuantity, orderPrice} = req.body;
    if(!userID || !foodID || !orderQuantity || !orderPrice){
        return res.json({
            message:"Please Enter All Required Details",
            success: false
        })
    }
    const newOrder = new Order({
        userID, foodID, orderQuantity, orderPrice
    })
    newOrder.save().then(order => {
        res.json({
            success: true,
            message: "Food Saved!",
        })    
    })
})

module.exports = router;