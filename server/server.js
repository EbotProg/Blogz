const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
// const multer = require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors({
    origin: 'http://localhost:3000'
}))

//for multer
// const storage = multer.diskStorage({
//     destination: (req, file, callback)=>{
//         callback(null, "../client/public/userImages/")
//     },
//     filename: (req, file, callback)=>{
//         callback(null, file.originalname)
//     }
// })

// const upload = multer({storage});

const { connectToDb, getDb } = require('./db');

const port = 7500;

app.get('/', (req, res)=>{
    res.end();
})




let db;
connectToDb((err)=>{
    if(!err){
        app.listen(port, (err)=>{
            if(err) console.log(err);
            console.log(`listening to server at http://localhost:${port}`);
        })
        db = getDb();
    }
})


//used to fetch users from db
app.get('/auth/register', (req, res)=>{
    let array = [];
    db.collection('users')
    .find({})
    .forEach((user)=> array.push(user))
    .then(()=>{
        res.send(array);
    })
})


//used to submit and check a user's registration info
app.post('/auth/register', (req, res)=>{

    let regInfo = {
        email: "",
        username: "",
        password: "",
        verified: false
    };
  
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            regInfo.email = req.body.email;
            regInfo.username = req.body.username;
            regInfo.password = hash;

            console.log(regInfo);
      
            //add to db
            db.collection('users')
           .insertOne(regInfo)
           .then(()=>{
            console.log("info added successfully")
    })


        });
    });
  


    
    res.end();
})


//route for dashbaord

app.get('/blogs', (req, res)=>{
    let array = [];
    db.collection('blogs')
    .find({})
    .forEach((user)=> array.push(user))
    .then(()=>{
        res.send(array);
    })
})

app.get('/blogs/:id', (req, res)=>{

    db.collection('blogs')
    .findOne({_id: req.params.id})
    .then((result)=>{
        res.send(result);
    })
})

// app.post('/create-new-blog', (req, res)=>{

    

// })