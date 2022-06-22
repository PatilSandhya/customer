const mongoose = require("mongoose");
const { defaultAdminLogin } = require('../controllers/adminController');
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
             useNewUrlParser:true,
             useUnifiedtopology:true,
            //usefindandmodify:false,
            //useCreateIndex:true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
        await defaultAdminLogin();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;