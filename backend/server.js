const express = require('express');
const cors = require('cors');
//1. connect database in MongoDB Atlas
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//2. connect database in MongoDB Atlas
const uri = process.env.ATLAS_URI;
//The section useNewUrlParser: true is added because the MongoDB Node.js driver rewrote the tool it uses to parse MongoDB connection strings. 
//Because this is such a big change, they put the new connection string parser behind a flag. 
////The section useCreateIndex: true is similar. 
////It is to deal with MongoDB deprecating the ensureIndex() function.
mongoose.connect(uri, { useUnifiedTopology: true,  useNewUrlParser: true, useCreateIndex: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//tell the server to use the files in the routes we just created
const staffsRouter = require('./routes/staffs');
//const usersRouter = require('./routes/users');

app.use('/staffs', staffsRouter);
//app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});