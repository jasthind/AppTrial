
// app/routes.js

// grab the database models
var Dish = require('./models/dish');
var Order = require('./models/order');
var User = require('./models/user');

var tempCount = 0;

module.exports = function(app, router) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    router.get('/dishes', function(req, res) {
        // use mongoose to get all dishes in the database
        Dish.find(function(err, dishes) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err){
                res.send(err);
            }
            res.json({dishes : dishes});
        });
    });

    router.get('/orders', function(req, res) {
        Order.find(function(err, orders) {
            if (err){
                res.send(err);
            }
            res.json({orders : orders});
        });
    });


    router.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err){
                res.send(err);
            }
            res.json({users : users});
        });
    });

    // route to handle creating goes here (app.post)
    router.post('/dishes', function(req, res) {

        console.log(req)
        tempCount++;
        var dish = new Dish({'name' : 'Chicken-'+tempCount})
        dish.save(function (err) {
            if (err) {
                console.log(err);
            }else{
                res.send("Dish Jay"+tempCount+" added");
            }
        })
    })

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('public/index.html');
    });

};
