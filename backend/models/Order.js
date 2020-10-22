const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    userEmail:{ 
        type: String 
    },
    
    foodID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodMenuSchema'
    },

    foodQuantity: {
        type: Number
    },

    orderPrice:{
        type: Number
    },

    orderDate:{
        type: Date,
        default: Date.now()
    },

    paymentMethod: {
        type: String
    }
});

module.exports = Food = mongoose.model('order',OrderSchema);