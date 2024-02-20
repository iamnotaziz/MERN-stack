const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config()

const app = express();

app.use(morgan("dev")); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false); 
mongoose.connect(MONGO_URI).then(
  () => {
    console.log("Database connected successfully ");
  },
  (error) => {
    console.log("Could not connect to database : " + error);
  }
);

const workshopRoutes = require("./src/routes/WorkShopRoutes");
app.use("/api/v1/", workshopRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

