const mongoose = require('mongoose');

const PhoneDetailSchema = mongoose.Schema({
   Manufacturer: String,
   Model: String,
   Price: String
});

module.exports = mongoose.model('phoneDetail',PhoneDetailSchema);

