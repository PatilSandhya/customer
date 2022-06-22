const HTTP = require('../constant/responseCode.Constant');
const CustomerModel = require('../models/customerModel');

const { encryptPassword, comparePassword, createAccessToken } = require('../services/common.service');

const addCustomer = async (req, res, next) => {
 const a = 1;
 const reqData = req.body;

  const checkCustomer = await CustomerModel.find({ mobile: reqData.mobileNum });
    if (checkCustomer && checkCustomer.length > 0) {
        return res.status(HTTP.CONFLICT).send({ msg: "Please check again! This number is already registered!", data: {} });
    }
    const newCustomer = new CustomerModel(reqData)
    const customerData = await newCustomer.save(); 
 console.log(reqData);

    return res.status(HTTP.SUCCESS).send({ msg: "Customer registered successfully", data: customerData });
}

module.exports = {
    addCustomer   
}