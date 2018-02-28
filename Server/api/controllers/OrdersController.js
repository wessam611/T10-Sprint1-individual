var mongoose = require('mongoose'),
    auth = require('basic-auth'),
    Validation = require('../utils/Validations'),
    User = mongoose.model('User'),
    Product = mongoose.model('Product');



module.exports.getOrders = function (req, res, next) {
    /*
    * End point for retrieving user's orders
    *
    * @author: Wessam Ali
    */
    var userId = req.params.userId;

    // Validating the userId
    var user = User.findOne({
        _id: userId
    }).exec(function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res
                .status(403)
                .json({
                    err: 'Wrong user id',
                    msg: null,
                    body: null
                });
        }
        var orders = user.orders;
        return res
            .status(200)
            .json({
                err: null,
                msg: 'Orders',
                data: orders
            });
    });
};

module.exports.postOrders = function (req, res, next) {
    /*
    * End point for creating a new order(checkout)
    *
    * @author: Wessam Ali
    */
    var userId = req.params.userId;

    // Validating the userId
    var user = User.findOne({
        _id: userId
    }).exec(function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res
                .status(403)
                .json({
                    err: 'Wrong user id.',
                    msg: null,
                    body: null
                });
        }

        // Validating cart
        var cart = user.cart;
        if (length(cart) == 0) {
            return res
                .status(404)
                .json({
                    err: 'Cart is empty',
                    msg: null,
                    body: null
                });
        }
        // Validating shippingAddress
        var shippingAddress = req.body.shippingAddress;
        if (!shippingAddress) {
            return res
                .status(404)
                .json({
                    err: 'Shipping address isn\'t provided',
                    msg: null,
                    body: null
                });
        }
        var order = user.orders.create({
            products: cart.products,
            totalPrice: cart.totalPrice,
            shippingAddress: req.body.shippingAddress
        });
        user.save(function (err) {
            if (err) {
                return next(err);
            }
            return res
                .status(201)
                .json({
                    err: null,
                    msg: 'Orders',
                    data: order
                });
        });

    });
};
