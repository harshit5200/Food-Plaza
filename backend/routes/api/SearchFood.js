const express = require('express');
const Food = require('../../models/Food');
const cors = require("cors");
const router = express.Router();
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(fileUpload());
router.use(cors());

router.post('/', (req,res) => {
    const {searchItem} = req.body;
    if(!searchItem){
        return res.json({
            message:"Please Enter All Required Details",
            success: false
        })
    }
    Food.find({
        foodName:searchItem
    }).then(food => {
        if (food){
            res.send(food)
        }
    })
})

module.exports = router;