const express = require("express");
const connectDB = require("./config/mongodb");
const userController = require("./controllers/userController");
const cartController = require("./controllers/cartController");
const simController = require("./controllers/simController");
const bankController = require("./controllers/bankController");
const  projectController = require("./controllers/projectController");


const app = express();


connectDB();

app.use(express.json());

app.get('/',(req, res)=>{res.send("ok")});


app.get('/users/:id', userController.getUserById);
app.post('/user', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);
app.post("/account",bankController);
// project end points

app.get('/v1/projects',projectController.gettingproject)
app.post('/v1/projects',projectController.createproject)
// app.put('/v1/projects',projectController.updateproject)
app.delete('/v1/projects/:_id',projectController.deleteproject)

app.post('/add', cartController);
app.post('/addsim',simController );


app.listen("3002",()=>{
    console.log("server is running on http://localhost:3002");
});