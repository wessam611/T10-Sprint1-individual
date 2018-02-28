var mongoose = require('mongoose');

module.exports.productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  sellerName: {
    type: String,
    required: true,
    trim: true
  },
  stock: Number
});



var Product = mongoose.model('Product', module.exports.productSchema);

