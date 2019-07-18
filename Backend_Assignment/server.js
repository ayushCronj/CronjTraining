var express = require('express');
var app = express();
var mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Database Connected");
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: Date,
    gender: String,
    // address: String,
    profession: String,
    address: {
        city: String,
        line1: String,
        line2: String
    }
});

var Users = mongoose.model("Users", userSchema);

//insert
app.post('/api/users/create', async (req, res) => {
    console.log(req.body);
    // console.log(Object.keys(req.body.address));
    if (!req.body.hasOwnProperty("dob")) {
        req.body["dob"] = "";
    }
    if (!req.body.hasOwnProperty("name")) {
        req.body["name"] = "";
    }
    if (!req.body.hasOwnProperty("address")) {
        req.body["address"] = [];
    }
    if (!req.body.address.hasOwnProperty("city")) {
        req.body.address["city"] = "";
    }
    if (!req.body.address.hasOwnProperty("line1")) {
        req.body.address["line1"] = "";
    }
    if (!req.body.address.hasOwnProperty("line2")) {
        req.body.address["line2"] = "";
    }
    if (!req.body.hasOwnProperty("profession")) {
        req.body["profession"] = "";
    }
    if (!req.body.hasOwnProperty("gender")) {
        req.body["gender"] = "";
    }
    console.log(req.body);
    var obj = new Users({
        userID: uuidv4(),
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        "address.city": req.body.address.city,
        "address.line1": req.body.address.line1,
        "address.line2": req.body.address.line2,
        profession: req.body.profession

    });
    console.log(obj);
    // console.log(obj);
    await obj.save(function (error) {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            res.send("Data Saved");
        }
    });
});

//getuserbyid
app.get('/api/users/get/:id', async (req, res) => {
    console.log(req.params.id);
    await Users.find({ userID: req.params.id }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.send(error);
    })
})

//update
app.post('/api/users/update/:id', async (req, res) => {
    console.log(req.params.id);
    var q = Users.where({ userID: req.params.id }).setOptions({ upsert: true, runValidators: true, setDefaultsOnInsert: true });
    await q.updateOne({
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        profession: req.body.profession
    }).exec().then((result) => { res.send("Updated") }).catch((error) => { res.send(error) })
})

//delete
app.get('/api/users/delete/:id', async (req, res) => {
    console.log(req.params.id);
    let query = { userID: req.params.id };
    await Users.deleteOne(query).exec().then((result) => { res.send(result.deletedCount + " record(s) deleted") }).catch((error) => { res.send(error) })
})

//showall
app.get('/api/users/filter/all', async (req, res) => {
    console.log(req.params.name);
    await Users.find({}).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.send(error);
    })
})


//filtername
app.get('/api/users/filter/name/:name', async (req, res) => {
    console.log(req.params.name);
    await Users.find({ name: { $regex: req.params.name, $options: "i" } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.send(error);
    })
})

//filterprofession
app.get('/api/users/filter/profession/:name', async (req, res) => {
    console.log(req.params.name);
    await Users.find({ profession: { $regex: req.params.name, $options: "i" } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.send(error);
    })
})

//filtergender
app.get('/api/users/filter/gender/:name', async (req, res) => {
    console.log(req.params.name);
    let query = "^" + req.params.name + "$";
    await Users.find({ gender: { '$regex': query, $options: 'i' } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.send(error);
    })
})

//filtercity
app.get('/api/users/filter/city/:name', async (req, res) => {
    console.log(req.params.name);
    await Users.find({ "address.city": { $regex: req.params.name, $options: "i" } }).exec().then((result) => {
        res.send(result);
    }
    ).catch((error) => {
        res.send(error);
    })
})

//filterage
app.get('/api/users/filter/age/:name', async (req, res) => {
    console.log(req.params.name);
    var result = [];
    await Users.find({}, function (err, docs) {
        if (err) { res.send(err) }
        else {
            // console.log(docs);
            // console.log(new Date());
            result = docs.filter(function (doc) {
                let today = new Date();
                let dob = doc.dob;
                let age = today.getFullYear() - dob.getFullYear();
                let month = today.getMonth() - dob.getMonth();
                let date = today.getDate() - dob.getDate();
                if (month < 0)
                    age--;
                else if (month == 0 && date < 0)
                    age--;
                return (age >= parseInt(req.params.name))
            });
            res.send(result);
        }
    });
})

//compoundfiltering
app.get('/api/users/filter/many', async (req, res) => {
    console.log(Object.keys(req.query));
    if (!req.query.hasOwnProperty("age")) {
        req.query["age"] = "";
    }
    if (!req.query.hasOwnProperty("name")) {
        req.query["name"] = "";
    }
    if (!req.query.hasOwnProperty("city")) {
        req.query["city"] = "";
    }
    if (!req.query.hasOwnProperty("profession")) {
        req.query["profession"] = "";
    }
    if (!req.query.hasOwnProperty("gender")) {
        req.query["gender"] = "";
    }
    let query1 = "";
    if (req.query.gender === "") {
        query1 = req.query.gender;
    }
    else {
        query1 = "^" + req.query.gender + "$";
    }
    console.log(req.query);
    await Users.find({
        $and: [
            { name: { $regex: req.query.name, $options: "i" } },
            { "address.city": { $regex: req.query.city, $options: "i" } },
            { gender: { $regex: query1, $options: 'i' } },
            { profession: { $regex: req.query.profession, $options: "i" } },
        ]
    }).exec().then((result) => {
        if (req.query.age === "") {
            res.send(result);
        }
        else {
            result1 = result.filter(function (doc) {
                let today = new Date();
                let dob = doc.dob;
                let age = today.getFullYear() - dob.getFullYear();
                let month = today.getMonth() - dob.getMonth();
                let date = today.getDate() - dob.getDate();
                if (month < 0)
                    age--;
                else if (month == 0 && date < 0)
                    age--;
                return (age >= parseInt(req.query.age))
            });
            res.send(result1);
        }
    }).catch((err) => {
        res.send(err);
    })
})

app.listen(3002);