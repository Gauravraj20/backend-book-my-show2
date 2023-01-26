require("dotenv").config();
const { MongoClient } = require("mongodb");

let mongoose = require("mongoose");

// for production.
const mongoURI = "mongodb+srv://Gaurav:Gaurav@cluster0.tqz0mog.mongodb.net/Almabetter-book-my-show?retryWrites=true&w=majority"

// for development.
// const mongoURI = "mongodb://localhost:27017/" + "bookMovie"
const connectToMongo = async () => {
  // Connecting to database using connection string and speciying if there is any error or it was successfull
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
    });
};

exports.connection = connectToMongo;
