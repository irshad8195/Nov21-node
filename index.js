const express = require("express");
const app = express();
const port = 8000;
const db=require('./config/mongoose')
//const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: true }));
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const cors = require("cors");
var corsOptions = {
  origin: "*"
};
app.use(express.urlencoded())
app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
// app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);

const userArr = [
  { id: 1, name: "Priyanshu" },
  { id: 2, name: "Nasikh" }
];

// app.get("/hey", (req, res) => {
//   res.send("hey from node Server");
// });

// app.get("/getUsers/:name/:age", (req, res) => {
//   console.log(req);
//   return res.json({ userData: userArr });
// });

app.post("/createUser", (req, res) => {
  userArr.push(req.body);
  return res.json({ message: "User added successfully" });
});

// app.delete("/deleteUser", (req, res) => {
//   const idToBeDeleted = req.body.id;
//   const updatedArr = userArr.filter((elem) => elem.id != idToBeDeleted);
//   return res.json({ userArr: updatedArr });
// });

// app.put("/updateUser", (req, res) => {
//   const idToBeUpdated = req.body.id;
//   const index = userArr.findIndex((elem) => elem.id == idToBeUpdated);
//   userArr[index] = req.body;
//   return res.json({ message: "User updated successfully" });
// });

// app.get('/getUserById', (req, res) =>{
//   const userId = req.body.id;
//   const user = userArr.find((elem) => elem.id == userId);
//   return res.json({user : user});
// })

app.set("secretKey", "SecretNov21")
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


// query or queryParams
// parameters or params