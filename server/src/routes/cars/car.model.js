const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    productImages: { type: Object },
    productName: { type: String },
    brandName: { type: String },
    yearOfPurchase: { type: Number },
    model: { type: String },
    physicalCondition: { type: String },
    description: { type: String },
    price: { type: Number },
    location: { type: String },
    postedOn: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Car = mongoose.model("car", carSchema);

module.exports = Car;
