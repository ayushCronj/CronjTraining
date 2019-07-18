var mongoose = require('mongoose');

var Schema = mongoose.Schema;
const userSchema = new Schema({
    userID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: Date,
    gender: String,
    profession: String,
    address: {
        city: String,
        line1: String,
        line2: String
    },
    age: Number
}, { versionKey: false });

const Users = module.exports = mongoose.model('Users', userSchema);