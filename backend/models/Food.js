const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Food Schema

const FoodMenuSchema = new Schema({
    foodName: {
        type:String,
        require: true
    },
    foodType: {
        type:String,
        require: true
    },
    foodRating: {
        type:String,
        require: true
    },
    foodDescription: {
        type:String,
        require: true
    },
    foodPrice: {
        type:String,
        require: true
    },
    foodImage: {
        type: String
    }
});

module.exports = Food = mongoose.model('foodmenu',FoodMenuSchema);