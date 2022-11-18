const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
  {
    image: { type: Object },
    price: { type: Number },
    address: { type: String },
    postDate: { type: String },
    sellerName: { type: String },
    memberSince: { type: String },
    phone: { type: String },
    state: { type: String },
    bathrooms: { type: Number },
    bedrooms: { type: Number },
    furnished: { type: String },
    category: { type: String },
    floor: { type: Number },
    carParking: { type: Number },
    description: { type: String },
  },
  { versionKey: false }
);

const House = mongoose.model("house", houseSchema);

module.exports = House;
