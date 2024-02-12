// Set up mongoose connection
const express = require("express");
const mongoose = require("mongoose");
const ShoppingList = require("./models/ShoppingList");

const app = express();
const PORT = 3000;


app.use(express.json());



mongoose.connect("mongodb+srv://rhope11:<Paypayday3030>@cluster00.iundvi3.mongodb.net/?retryWrites=true&w=majority")
mongoose.set("strictQuery", false);
const mongoDB = "";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// post new CRUD
app.post("/food", async (req, response) => {
  const food = new foodModel(req.body);
})


app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
// const ShoppingLists = require("./models/ShoppingLists");