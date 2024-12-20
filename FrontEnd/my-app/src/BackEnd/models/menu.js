const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const menuItemSchema = new Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    image: { type: String },
    availability: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("MenuItem", menuItemSchema);