const express = require("express");
const connectDB = require("./config/mongodb");
const registerController = require("./controllers/registerController");
const cartController = require("./controllers/cartController");
const bodyParser = require("body-parser");
const simController = require("./controllers/simController");


const app = express();


connectDB();

app.use(bodyParser.json()); // to parse application/json

app.get('/',(req, res)=>{res.send("ok")});
app.post('/register', registerController);
app.post('/add', cartController);
app.post('/addsim',simController );


app.listen("3002",()=>{
    console.log("server is running on http://localhost:3002");
});