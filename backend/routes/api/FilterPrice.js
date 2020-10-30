const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const Food = require('../../models/Food');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
router.use(cors());

router.get('/', (req, res) => {
    Food.find({}).sort({foodPrice:-1}).then(foodList => {
        if(foodList){
            res.send(foodList)
        }
    })
    .catch(() => {
        res.send("Getting Error in Filtering On The Basis Of Price!")
    })
})

module.exports = router;
