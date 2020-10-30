const express = require('express');
const Order = require('../../models/Order');
const cors = require("cors");
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectID;

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(fileUpload());
router.use(cors());

router.post('/', (req,res) => {
    const {currentUser} = req.body;
    if(!currentUser){
        return res.json({
            message:"Please Enter All Required Details",
            success: false
        })
    }

    Order.aggregate([
        { "$match": { "userID": ObjectId(currentUser) } },
        { $lookup:
           {
             from: 'foodmenus',
             localField: 'foodID',
             foreignField: '_id',
             as: 'fooddetails',
           }
         }
        ]).then(order => {
            if(order){
                res.send(order)
            }
        })
})

module.exports = router;