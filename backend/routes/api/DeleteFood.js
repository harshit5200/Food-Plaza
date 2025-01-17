const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const Food = require('../../models/Food');
const ObjectId = require("mongodb").ObjectID;

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));

router.delete('/', (req,res) => {
    Food.deleteOne({_id:ObjectId(req.body._id)})
        .then(res.send("Food Deleted!"))
            .catch(res.send("Food Doesn't Deleted"))
});

module.exports = router;