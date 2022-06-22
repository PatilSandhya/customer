const route = require("express").Router();
const { celebrate } = require('celebrate');
const { VALIDATION } = require('../validation/index');
const { login } = require('../controllers/adminController')

route.get('/', (req, res)=>{
    res.render('login');
});

route.get('/dashboard', (req, res)=>{
    res.render('dashboard');
});

route.post("/login", 
 celebrate({
body: {
    email: VALIDATION.GENERAL.EMAIL,
    password: VALIDATION.GENERAL.PASSWORD,
}
}), login);


module.exports = route;