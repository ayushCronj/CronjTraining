const uuidv4 = require('uuid/v4');
const Users = require('../Model/dbschema');
const services = require('../services/services');

//create user
exports.createUser = function (req, res) {
    var postdata = new Users(req.body);
    postdata.userID = uuidv4();
    if (req.body.hasOwnProperty("dob")) {
        let today = new Date();
        let dob = new Date(req.body.dob);
        var age = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        let date = today.getDate() - dob.getDate();
        if (month < 0)
            age--;
        else if (month == 0 && date < 0)
            age--;
        postdata.age = age;
    }
    console.log(postdata);
     services.createFunction(postdata).then((result) => {res.send(result)}).catch((err)=>res.status(500).send(err));
}

//getuserbyID
exports.getUserById = function (req, res) {
    services.findIDUser(req.params.id).then((result) => {
        if (result.length === 0) {
            res.status(404).send("User ID not found");
        }
        else {
            res.send(result);
        }
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//get all users
exports.getUser = function (req, res) {
    services.findUser().then((result) => {
        if (result.length === 0) {
            res.send("User List empty");
        }
        else {
            res.send(result);
        }
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//update a user
exports.updateUser = function (req, res) {
    let query = { userID: req.body.userID }
    services.updateFunction(query,req.body)
        .then(data => {
            if (data.n == 0) {
                res.status(404).send("User ID not found");
            }
            else if (data.nModified == 0) {
                res.send("Not edited anything");
            }
            else {
                res.send("User Data Updated");
            }
        }).catch((error) => {
            res.status(500).send(error);
        })
}

//delete a user
exports.deleteUser = function (req, res) {
    console.log(req.params.id);
    let query = { userID: req.params.id };
    services.deleteFunction(query).then((result) => {
        if (result.deletedCount == 0) {
            res.status(404).send("User Id not found");
        }
        else {
            res.send("Record deleted");
        }
    }).catch((error) => { res.status(500).send(error) })
}

//filter by name
exports.filterName = function (req, res) {
    services.filterNameFunction(req.params.name).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//filter by gender
exports.filterGender = function (req, res) {
    console.log(req.params.name);
    let query = "^" + req.params.name + "$";
    services.filterGenderFunction(query).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//filter by city
exports.filterCity = function (req, res) {
    services.filterCityFunction(req.params.name).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//filter by profession
exports.filterProfession = function (req, res) {
    services.filterProfessionFunction(req.params.name).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//filter by age
exports.filterAge = function (req, res) {
    services.filterAgeFunction(parseInt(req.params.name)).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send("Error");
    })
}

//compound filtering
exports.filterMany = function (req, res) {
    if (req.query.hasOwnProperty("city")) {
        var temp = {};
        for (var i in req.query) {
            if (i == "city") temp["address.city"] = req.query["city"];
            else temp[i] = req.query[i];
        }
        req.query = temp;
    }
    let filterQuery = {};
    if (req.query.name) {
        filterQuery.name = { $regex: req.query.name, $options: "i" };
    }
    if (req.query.profession) {
        filterQuery.profession = { $regex: req.query.profession, $options: "i" };
    }
    if (req.query.age) {
        filterQuery.age = { $gte: parseInt(req.query.age) };
    }
    if (req.query.gender) {
        let query1 = "^" + req.query.gender + "$";
        filterQuery.gender = { $regex: query1, $options: "i" };
    }
    if (req.query["address.city"]) {
        filterQuery["address.city"] = { $regex: req.query["address.city"], $options: "i" };
    }
    services.filterManyFunction(filterQuery).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send("Error");
    })
}
