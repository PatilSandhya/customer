const HTTP = require('../constant/responseCode.Constant');
const AdminModel = require('../models/adminModel');
const AdminSessionModel = require('../models/adminSessionModel');
const { encryptPassword, comparePassword, createAccessToken } = require('../services/common.service');

const createNewSession = async (payload) => {
    payload.adminId = payload.adminId;
    const sessionData = await new AdminSessionModel(payload).save();
    return sessionData.toObject();
}
const defaultAdminLogin = async () => {
    const email = "admin@gmail.com";
    const currentAdmin = await AdminModel.findOne({ email });
    if (currentAdmin && Object.keys(currentAdmin).length > 0) return;

    const adminObj = {
        email,
        password: await encryptPassword("Admin@123"),
        name: "super admin",
    }
    const newAdmin = new AdminModel(adminObj)
    await newAdmin.save();
    console.log('Super admin created');
}

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const currentAdmin = await AdminModel.findOne({ email });
    //const currentUser = await userModel.findOne({ email });
    if (!currentAdmin || Object.keys(currentAdmin).length == 0) return res.status(HTTP.NOT_FOUND).send({ msg: "Admin not found" });

    
    const isPasswordMatch = await comparePassword(password, currentAdmin.password);
    if (!isPasswordMatch) {
        return res.status(HTTP.CONFLICT).send({ msg: "Password is not valid" });
    }

    const sessionData = await createNewSession({ email, password, adminId: currentAdmin._id });

    const adminData = {
        ...currentAdmin._doc,
        token: await createAccessToken(sessionData._id)
    }
    delete adminData.password;
    res.status(HTTP.SUCCESS).send({ msg: 'Admin login successfully', data: adminData })
}

module.exports = {
    defaultAdminLogin,
    login,
    
}