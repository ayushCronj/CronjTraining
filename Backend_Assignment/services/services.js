const Users = require('../Model/dbschema');
exports.createFunction = function(postdata) {
    return Users.create(postdata)
}

exports.findIDUser = function (id) {
    console.log(id);
    return Users.find({ userID: id }).exec()
}

exports.findUser = () => {
    return Users.find({}).exec()
}

exports.updateFunction = function(query,body) {
    return Users.updateOne(query,body).exec()
}

exports.deleteFunction = function (query) {
    return Users.deleteOne(query).exec()
}

exports.filterNameFunction = function (name) {
    return Users.find({ name: { $regex: name, $options: "i" } }).exec()
}

exports.filterGenderFunction = function (name) {
    return Users.find({ gender: { $regex: name, $options: "i" } }).exec()
}

exports.filterCityFunction = function (name) {
    return Users.find({ "address.city": { $regex: name, $options: "i" } }).exec()
}

exports.filterAgeFunction = function (name) {
    return Users.find({ age: { $regex: name, $options: "i" } }).exec()
}

exports.filterProfessionFunction = function (name) {
    return Users.find({ profession: { $regex: name, $options: "i" } }).exec()
}

exports.filterManyFunction =function (name) {
    return Users.find(name).exec()
}