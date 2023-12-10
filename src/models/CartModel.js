const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required:true},
      product:{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required:true},
      quantity: {
        type: Number,
        required: true,
        min: 1, // Ensures the quantity is a positive integer.
      },
    },
    {timestamps:true,versionKey:false}
)
const CartModel=mongoose.model('carts',DataSchema)
module.exports=CartModel