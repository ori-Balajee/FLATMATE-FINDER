const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./model');   // 👈 import schema

const app = express();

app.use(cors());
app.use(express.json()); // 👈 VERY IMPORTANT (for POST)

mongoose
  .connect(
    "mongodb://jojojooooyaya_db_user:asrafhkaloose@ac-havh7do-shard-00-00.i4smntk.mongodb.net:27017,ac-havh7do-shard-00-01.i4smntk.mongodb.net:27017,ac-havh7do-shard-00-02.i4smntk.mongodb.net:27017/?ssl=true&replicaSet=atlas-pgocw1-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.post('/users', async (req, res)=>{
  try{
    const user = new User(req.body);  // create new user from request body
    await user.save();  // save to database
    res.status(201).json(user);  // return created user
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

