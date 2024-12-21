const mongoose = require('mongoose');
const Schema = mongoose.Schema;


ProductSchema = new Schema
(   {
        productid:{type: String,required:true},
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: {type: String, required: false },
        image: { type: String, required: true  },
        rating: {type: Number, default: 0,required: false},
        size: {type: String ,required:true}
       

    },
    {
        timestamps: true
    }
);
  const ProductModel = mongoose.model('Product', ProductSchema);
  module.exports = mongoose.model('product', ProductSchema);