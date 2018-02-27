var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

var userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    emailAddress: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    cart: cartSchema,
    orders: {
        type: [orderSchema],
        default: []
    },
    userType: {
        type: String,
        default: 'viewer'
    }
});

var cartSchema = mongoose.Schema({
    products: { 
        type: [Product.Schema],
        required: true
    },
    totalPrice: { 
        type: Number,
        required: true
    }
});

var orderSchema = mongoose.Schema({
    products: {
        type: [Product.Schema],
        required: true
    },
    totalPrice: { 
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    shippingAddress: {
        type: String,
        trim: true,
        required: true
    }
});

mongoose.model('User', userSchema);
