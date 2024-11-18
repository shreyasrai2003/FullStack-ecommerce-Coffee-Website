const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://shreyasrai102003:shreyasrai102003@cluster0.dyytxrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("express app is running");
});

const Users = mongoose.model("Users", {
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, error: "exiting  user found with same email" });
  }
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "usr");
  res.json({ success: true, token });
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passcompare = req.body.password === user.password;
    if (passcompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "usr");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "Wrong Password" });
    }
  } else {
    res.json({ success: false, error: "Wrong EmailId" });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port:", port);
  } else {
    console.log("error:" + error);
  }
});
