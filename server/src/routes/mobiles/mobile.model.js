const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    productImages: { type: Object, required: true },
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    yearOfPurchase: { type: Number, required: true },
    model: { type: String, required: true },
    physicalCondition: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    postedOn: { type: String, required: true }
}, {
    versionKey: false,
});

const Mobile = mongoose.model("mobile", mobileSchema);

module.exports = Mobile;