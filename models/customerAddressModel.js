const mongoose = require('mongoose')

const customerAddressSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    landmark: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
    },
    addressType: {
        type: String,
        required: true,
    },
}, { timestamps: true, versionKey: false })

const CustomerAddress = mongoose.model('customerAddress', customerAddressSchema)

module.exports = CustomerAddress