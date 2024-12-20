const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const orderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    items: [
      {
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Preparing", "Completed", "Cancelled"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
 module.exports = mongoose.model("Order", orderSchema);