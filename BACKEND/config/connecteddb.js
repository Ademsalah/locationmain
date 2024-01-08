const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ademhameed123:P2J1IBFTpEtBmpHe@cluster0.tesxucc.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("u r connected to the db ");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
