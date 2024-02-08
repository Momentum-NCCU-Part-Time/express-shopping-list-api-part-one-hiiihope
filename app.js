// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


const ShoppingLists = require("./models/ShoppingLists");