const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require('../../models/User');
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));

router.delete('/', (req,res) => {
    User.deleteOne({_id:ObjectId(req.body._id)})
    .then(console.log("User Deleted!"))
    .catch(console.log("User Doesn't Deleted"))

});

module.exports = router;