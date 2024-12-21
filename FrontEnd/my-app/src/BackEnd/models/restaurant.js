const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const restaurantSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    address: { type: String,  },
    logo: { type: String },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User",  },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    location: {type: String } 
  });
  
  module.exports = mongoose.model("Restaurant", restaurantSchema);