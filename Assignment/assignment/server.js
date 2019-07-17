var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
app.use(express.json());
var url = 'mongodb://127.0.0.1:27017';

app.get('/api/reports', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            const collection = db.collection('mycollection');
            collection.find({}).toArray((err, items) => {
                res.send(items);
            })
        }
        client.close();
    });
});

app.get('/api/reportsearch/:name/:type', (req, res) => {
    console.log(req.params.name.toString());
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            if (req.params.type === "0") {
                const collection = db.collection('mycollection1');
                collection.insertOne({
                    key: req.params.name,
                }, (err, result) => {
                    if (!err) {
                        console.log("Updated");
                    }
                });
            }
            const collection1 = db.collection('mycollection');
            collection1.find({
                $or: [
                    { title: { $regex: req.params.name } },
                    { description: { $regex: req.params.name } }
                ]
            }).toArray((err, items) => {
                res.send(items);
            })
            // collection.find({ $text : { $search: {$regex: req.params.name } } }).toArray((err, items) => {
            //     res.send(items);
            // })

        }
        client.close();
    });
});

app.get('/api/reportfilter/:max/:min', (req, res) => {
    console.log(req.params.max);
    console.log(req.params.min);
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            const collection = db.collection('mycollection');
            collection.find({ cost: { $gte: parseInt(req.params.min), $lte: parseInt(req.params.max) } }).toArray((err, items) => {
                res.send(items);
            })
        }
        client.close();
    });
});

app.get('/api/reportsort/:order', (req, res) => {
    console.log(req.params.order)
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            const collection = db.collection('mycollection');
            if (req.params.order == "CostAsc") {
                collection.find({}).sort({ cost: 1 }).toArray((err, items) => {
                    res.send(items);
                })
            }
            else if (req.params.order == "CostDesc") {
                collection.find({}).sort({ cost: -1 }).toArray((err, items) => {
                    res.send(items);
                })
            }
        }
        client.close();
    });
});

app.get('/api/recentsearch', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            const collection = db.collection('mycollection1');
            collection.find({}).sort({ _id: -1 }).limit(5).toArray((err, items) => {
                res.send(items);
            })
        }
        client.close();
    });
});

app.listen(3005);