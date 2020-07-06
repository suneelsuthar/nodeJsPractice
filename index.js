const express = require('express')
const app = express()
let mongose = require('./database/database')
const db = mongose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!")
});



app.listen('3000',()=>{
    console.log("running on port 3000")
})




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.oiwbn.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("database connected")
  // perform actions on the collection object
  client.close();
});



app.get('/',(req,res)=>{
    res.send("hello world")
})


app.use(express.json())        
app.use('/',require("./routes/app"))