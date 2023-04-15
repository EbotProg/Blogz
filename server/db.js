const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';


let dbConnection;

module.exports = {
    connectToDb: (cb)=>{
        MongoClient.connect(url)
        .then((client)=>{
            dbConnection = client.db('Blogz');
            return cb();
        })
        .catch(err=>{
            console.log(err);
            return cb(err);
        })
    },
    getDb: () => dbConnection
}