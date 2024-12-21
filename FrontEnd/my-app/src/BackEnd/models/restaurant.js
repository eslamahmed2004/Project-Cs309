const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const restaurantSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
<<<<<<< HEAD
    address: { type: String,  },
    logo: { type: String },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User",  },
=======
    // address: { type: String, required: true },
    logo: { type: String },
    // ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
>>>>>>> 3086ed0b80de3d51b70f372a3afa24fdb698caa4
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    location: {type: String } 
  });
  
  module.exports = mongoose.model("Restaurant", restaurantSchema);