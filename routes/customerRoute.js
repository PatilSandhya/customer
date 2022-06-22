const route = require("express").Router();
const { celebrate, Joi } = require('celebrate');
const { VALIDATION } = require('../validation/index');
const { addCustomer } = require('../controllers/customerController');

route.get('/customer/add', (req, res)=>{
    res.render('addCustomer');
});

route.post('/customer/add', addCustomer);

module.exports = route;
