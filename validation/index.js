const { Joi } = require('celebrate');

module.exports = {
    VALIDATION: {
        GENERAL: {
            NAME: Joi.string(),
            EMAIL: Joi.string().trim().email(),
            BOOLEAN: Joi.boolean().error(new Error('terms is a required field!')),
            PASSWORD: Joi.string(),
            STRING: Joi.string(),
            GST: Joi.string().min(15).max(15),
            PAN: Joi.string().min(10).max(10),
            MOBILE: Joi.number().min(10).max(10),
            ARRAY: Joi.array(),
            ARRAY_OF_NUMBERS: Joi.array().items(Joi.number()),
            ARRAY_OF_OBJECTS: Joi.array().items(Joi.object()),
            ADDRESS: {
                address: Joi.string().required(),
                pincode: Joi.number().required(),
                landmark: Joi.string().allow(""),
                country: Joi.string().required(),
                state: Joi.string().required(),
                city: Joi.string().required(),
                //isDefault: Joi.boolean().required(),
                addressType: Joi.string(),
            },
        }   
    }
}