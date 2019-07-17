var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
app.use(express.json());
var url = 'mongodb://127.0.0.1:27017';
MongoClient.connect(url, function (err, client) {
    if (err) {
        throw err;
    } else {
        const db = client.db('test');
        const collection = db.collection('mycollection');
        collection.find().toArray((err, items) => {
            console.log(items)
        })
    }
    client.close();
});

// let feed = [
//     {id: '1', title: 'Title1', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '01/01/2011', cost: '100' },
//     {id: '2', title: 'Title2', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '02/01/2018', cost: '110' },
//     {id: '3', title: 'Title3', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '03/01/2012', cost: '300' },
//     {id: '4', title: 'Title4', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '04/01/2017', cost: '450' },
//     {id: '5', title: 'Title5', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '21/01/2014', cost: '99' },
//     {id: '6', title: 'Title6', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '12/01/2016', cost: '100' },
//     {id: '7', title: 'Title7', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '08/01/2018', cost: '899' },
//     {id: '8', title: 'Title8', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '06/01/2011', cost: '10750' },
//     {id: '9', title: 'Title9', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '09/01/2010', cost: '100' },
//     {id: '10', title: 'Title10', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '07/01/2019', cost: '100' },
//     {id: '11', title: 'Title11', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '14/01/2017', cost: '100' },
//     {id: '12', title: 'Title12', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '18/01/2015', cost: '100' },
//     {id: '13', title: 'Title13', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '26/01/2014', cost: '100' },
//     {id: '14', title: 'Title14', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '19/01/2013', cost: '100' },
//     {id: '15', title: 'Title15', description: 'officia porro iure quia iusto qui ipsa ut modi', imageUrl: 'https://via.placeholder.com/600/24f355', publishedDate: '21/01/2012', cost: '100' }
// ];


app.get('/api/users/show-all/', (req, res) => {
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

app.get('/api/users/show-one/:id', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            const collection = db.collection('mycollection');
            collection.find({ id: req.params.id }).toArray((err, items) => {
                res.send(items);
            })
        }
        client.close();
    });
});

app.post('/api/users/add', function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err;
        } else {
            const db = client.db('test');
            const collection = db.collection('mycollection');
            collection.insertOne({
                id: req.body.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                publishedDate: req.body.publishedDate,
                cost: req.body.cost
            }, (err, result) => {
                if (!err) {
                    console.log("Updated");
                }
            })
        }
        client.close();
    });
});

app.listen(3000);