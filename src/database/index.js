const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://graphql:graphql@cluster0-hvnry.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

module.exports = mongoose;
