const mongoose = require("mongoose");

mongoose;

const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://shravan:hello@cluster0.wqbpg.mongodb.net/goodwill?retryWrites=true&w=majority"
  );
};

module.exports = connect;
