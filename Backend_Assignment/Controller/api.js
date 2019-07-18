const uuidv4 = require('uuid/v4');
const Users = require('../Model/dbschema');

//create user
exports.createUser = function (req, res) {
    var postdata = new Users(req.body);
    postdata.userID = uuidv4();
    if (req.body.hasOwnProperty("dob")) {
        let today = new Date();
        let dob = new Date(req.body.dob);
        console.log(dob);
        var age = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        let date = today.getDate() - dob.getDate();
        if (month < 0)
            age--;
        else if (month == 0 && date < 0)
            age--;
        console.log(age);
        postdata.age = age;
    }
    console.log(postdata);
    Users.create(postdata, function (err, postdata) {
        if (err) {
            res.status(500).send(err);
        }
        res.json(postdata);
    });
}

//getuserbyID
exports.getUserById = function (req, res) {
    // console.log(req.params.id);
    Users.find({ userID: req.params.id }).exec().then((result) => {
        if (result.length === 0) {
            res.status(404).send("ID Not Found");
        }
        else {
            res.send(result);
        }
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//get all users
exports.getUser = function (req, res) {
    Users.find({}).exec().then((result) => {
        if (result.length === 0) {
            res.send("User List Empty");
        }
        else {
            res.send(result);
        }
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//update a user
exports.updateUser = function (req, res) {
    let query = { userID: req.body.userID }
    Users.updateOne(query, req.body)
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
    Users.deleteOne(query).exec().then((result) => {
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
    console.log(req.params.name);
    Users.find({ name: { $regex: req.params.name, $options: "i" } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//filter by gender
exports.filterGender = function (req, res) {
    console.log(req.params.name);
    let query = "^" + req.params.name + "$";
    Users.find({ gender: { '$regex': query, $options: 'i' } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//filter by city
exports.filterCity = function (req, res) {
    console.log(req.params.name);
    Users.find({ "address.city": { $regex: req.params.name, $options: "i" } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//filter by profession
exports.filterProfession = function (req, res) {
    console.log(req.params.name);
    Users.find({ profession: { $regex: req.params.name, $options: "i" } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//filter by age
exports.filterAge = function (req, res) {
    console.log(req.params.name);
    Users.find({ age: { $gte: parseInt(req.params.name) } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}

//compound filtering
exports.filterMany = function (req, res) {
    console.log(Object.keys(req.query));
    if (req.query.hasOwnProperty("city")) {
        var new_o = {};
        for (var i in req.query) {
            if (i == "city") new_o["address.city"] = req.query["city"];
            else new_o[i] = req.query[i];
        }
        req.query = new_o;
    }
    console.log(req.query);
    let querybuilder = {};
    if (req.query.name) {
        querybuilder.name = { $regex: req.query.name, $options: "i" };
    }
    if (req.query.profession) {
        querybuilder.profession = { $regex: req.query.profession, $options: "i" };
    }
    if (req.query.age) {
        querybuilder.age = { $gte: parseInt(req.query.age) };
    }
    if (req.query.gender) {
        let query1 = "^" + req.query.gender + "$";
        querybuilder.gender = { $regex: query1, $options: "i" };
    }
    if (req.query["address.city"]) {
        querybuilder["address.city"] = { $regex: req.query["address.city"], $options: "i" };
    }
    Users.find(querybuilder).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.status(500).send(error);
    })
}