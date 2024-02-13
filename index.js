// Set up mongoose connection
const express = require("express");
const dayjs = require("dayjs")
const mongoose = require("mongoose");
const ShoppingList = require("./models/ShoppingList");


const port = process.env.PORT;


const app = express();
app.use(express.json());



mongoose.connect("mongodb+srv://rhope11:<>@cluster00.iundvi3.mongodb.net/?retryWrites=true&w=majority")
mongoose.set("strictQuery", false);
const mongoDB = "";
{ "protectConnectionStrings": true }

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// post new CRUD
app.post("/food", async (req, response) => {
  const food = new foodModel(req.body);
})


app.listen(port, () => console.log('Example app is listening on port 3000.'));
// const ShoppingLists = require("./models/ShoppingLists");

// get
app.get('/shoppinglists', (req, res) => {
  ShoppingList.find().then((results) => {
    if (results) {
      res.status(200).json(results)
    }else {
      res.status(404).json({ message: 'not found'})
    }
    })
    .catch((error) => res.status(400).json({ message: 'Bad request' }))
})


app.listen(port, () => console.log(`Application is running port ${port}`))