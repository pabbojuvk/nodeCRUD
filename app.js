const express = require("express");
const connectDB = require("./config/mongodb");
const userController = require("./controllers/userController");
const cartController = require("./controllers/cartController");
const bodyParser = require("body-parser");
const simController = require("./controllers/simController");
const bankController = require("./controllers/bankController");


const app = express();


connectDB();

app.use(bodyParser.json()); // to parse application/json

app.get('/',(req, res)=>{res.send("ok")});
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/user', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);
app.post("/account",bankController);

app.post('/add', cartController);
app.post('/addsim',simController );


app.listen("3002",()=>{
    console.log("server is running on http://localhost:3002");
});