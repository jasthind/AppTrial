
// app/routes.js

// grab the database models
var Customer = require('./models/customer');
var User = require('./models/user');
var Category = require('./models/category');
var MenuItem = require('./models/menuItem');
var OrderItem = require('./models/orderItem');
var Order = require('./models/order');

var tempCount = 0;

module.exports = function(app, router) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes


    // get all menu categories
    router.get('/categories', function(req, res) {
        Category.find(function(err, categories) {
            // nothing after res.send(err) will execute
            if (err){
                res.send(err);
            }
            res.json({categories : categories});
        });
    });

    // get all menu customers
    router.get('/customers', function(req, res) {
        Customer.find(function(err, customers) {
            if (err){
                res.send(err);
            }
            res.json({customers : customers});
        });
    });

    // get all users
    router.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err){
                res.send(err);
            }
            res.json({users : users});
        });
    });

    // get all menu items
    router.get('/menuItems', function(req, res) {
        MenuItem.find(function(err, menuItems) {
            if (err){
                res.send(err);
            }
            res.json({menuItems : menuItems});
        });
    });

    // get all orders
    router.get('/orders', function(req, res) {
        Order.find(function(err, orders) {
            if (err){
                res.send(err);
            }
            res.json({orders : orders});
        });
    });




    // route to handle creating goes here (app.post)
    router.post('/menuItems', function(req, res) {

        tempCount++;
        var menuItem = new MenuItem({
            name        : 'Chicken-'+tempCount,
            price       : 10,
            description : 'Chicken-'+tempCount+' is good',
            category    : 'CURRY',
            daysofweek  : ['MON', 'TUE', 'THU'],
            img         : 'butterChicken.jpg'
        })

        menuItem.save(function (err) {
            if (err) {
                console.log(err);
            }else{
                res.send("Menu Item Chicken-"+tempCount+" added");
            }
        })
    })

    // FAKE DATA GET
    // route to handle creating goes here (app.post)
    router.get('/addFakeMenuItems', function(req, res) {

        tempCount++;
        var menuItem = new MenuItem({
            name        : 'Chicken-'+tempCount,
            price       : 10,
            description : 'Chicken-'+tempCount+' is good',
            category    : 'CURRY',
            daysofweek  : ['MON', 'TUE', 'THU'],
            img         : 'butterChicken.jpg'
        })

        menuItem.save(function (err) {
            if (err) {
                console.log(err);
            }else{
                res.send("Menu Item Chicken-"+tempCount+" added");
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
