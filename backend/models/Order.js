const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    userID:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema' 
    },
    
    foodID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodMenuSchema'
    },

    orderQuantity: {
        type: Number
    },

    orderPrice: {
        type: Number
    },

    orderDate:{
        type: Date,
        default: Date.now()
    },

});

module.exports = Order = mongoose.model('order',OrderSchema);