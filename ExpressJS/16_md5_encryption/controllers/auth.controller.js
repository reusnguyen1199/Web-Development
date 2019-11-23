var md5 = require('md5');
var db = require('../db');

module.exports.login = function(req, res) {
    res.render('auth/login');
};

module.exports.postLogin = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({ email: email }).value();
    if (!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist.'
            ],
            inputValue: req.body
        });
        return;
    }

    var hashedPassword = md5(password); // get md5 hash password to compare with the one in database

    if (user.password !== hashedPassword) {
        res.render('auth/login', {
            errors: [
                'Wrong password.'
            ],
            inputValue: req.body
        });
        return;
    }

    res.cookie('userId', user.id);
    res.redirect('/users');
};