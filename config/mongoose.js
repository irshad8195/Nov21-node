const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nov21db');


const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err, "Error connecting DB")
})

db.once("open", () => {
  console.log('Successfully connected to MongoDB');
})


