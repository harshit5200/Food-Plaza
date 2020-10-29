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
    image = req.files.foodImage
    image.mv('public/images/' + image.name, (err) => {
        if (err){
        res.send("Image Not Uploaded Successfully!")
        }
    })
    var foodImage = image.name
    const {foodName, foodType, foodRating, foodDescription, foodPrice} = req.body;
    if(!foodName || !foodPrice || !foodRating || !foodDescription || !foodType || !foodImage){
        return res.json({
            message:"Please Enter All Required Details",
            success: false
        })
    }
    

    Food.findOne({
        foodName
    }).then(food => {
        if (food){
            return res.json({
                success: false,
                message: "Food Already Exists!"
            })
        }
        const newFood = new Food({
            foodName, foodType, foodRating, foodDescription, foodPrice, foodImage
        })
        newFood.save().then(food => {
                    res.json({
                        success: true,
                        message: "Food Saved!",
            })    
        }).catch(err => {
            console.log(err)
        })
    })
})

module.exports = router;