const mongoose = require('mongoose');

const customerAddressSchema = new mongoose.Schema({
    /* customerId: {
        type: mongoose.Types.ObjectId,
        required: true,
    }, */
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
    /* isDefault: {
        type: Boolean,
        default: true
    }, */
})

const customerSchema = new mongoose.Schema({
    customerType: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true,
    },
    ownership: {
        type: String,
        required: true,
    },
    gstNum: {
        type: String,
        required: true,
    },
    panNum: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
    },
    mobileNum: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    paymentbill: { // 1 - to pay, 2 - to be billed
        type: Number,
        required: true,
    },
    customerStatus: {
        type: Number,
        default: 1 // 1 - active, 2 - deactive, 3 - deleted
    },
    otherAddress: {
        type: [customerAddressSchema],
    },
}, { timestamps: true, versionKey: false })

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer