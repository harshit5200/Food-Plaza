const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require('../../models/User');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
router.use(cors());

router.get('/', (req, res) => {
    User.find({}).then(userList => {
        if(userList){
            res.send(userList)
        }
    })
    .catch(() => {
        console.log("Getting Error in Fetching User From Database!")
    })
})

module.exports = router;