const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require('../../models/User');
const ObjectId = require("mongodb").ObjectID;

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));

router.delete('/', (req,res) => {
    User.deleteOne({_id:ObjectId(req.body._id)})
        .then(res.send("User Deleted!"))
            .catch(res.send("User Doesn't Deleted"))
});

module.exports = router;