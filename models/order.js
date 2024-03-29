const mongoose = require('mongoose');
const products= require('./productschema');
const users = require('./userschema');

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
  address:{
    name:String,
    phone:Number,
    email:String,
    streetaddress: String,
    landmark:String,
    city: String,
    pincode: String,
    state: String
  },
  items: [
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
          },
      quantity:{
        type:Number
      }
    }
  ],
  totalAmount: Number,
  status:{
    type:String,
    enum:['Order Placed','Shipped','Delivered','Cancelled','Returned'],
    default:'Order Placed'
  },
  orderDate: { 
    type: Date, 
    default: Date.now 
  },
  paymentMethod: String,
  paymentStatus: String,
  orderId:String,
  shippingFee:Number
});

const order = mongoose.model('orders', orderSchema);

module.exports = order;