// Set up mongoose connection
require("dotenv").config();
const express = require("express");
const dayjs = require("dayjs");
const mongoose = require("mongoose");
const ShoppingList = require("./models/ShoppingList");
const cors = require("cors")


const port = process.env.PORT;


const app = express();
app.use(express.json());

app.use(cors())


// link to mongoose
mongoose.connect(process.env.DATABASE_URL);
mongoose.set("strictQuery", false);
const mongoDB = mongoose.connection;
db.once('open', () => console.log('MongoDB Active'));

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// post new CRUD
app.post("/food", async (req, response) => {
  const food = new foodModel(req.body);
})
app.post('/shoppinglists', (req, res) => {
  const newList = new List(req.body)
  newList.save()
  res.status(201).json(newList)
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


app.post('/shoppinglist', (req, res) => {
  const newList = new List(req.body)
  newList.save()
  res.status(201).json(newList)
})


app.listen(port, () => console.log(`Application is running on port ${port}`))
