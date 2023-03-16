const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv").config();

const app = express();

const BugModel = require("./model/bugModel");

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5001 ;


mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.post("/addBug", async (req, res) => {
  const { bugName, discription, dueDate, Project, Repoter, fileUrl } = req.body;

  const bug = new BugModel({
    title: bugName,
    discription: discription,
    due_date: dueDate,
    project:Project,
    reporter:Repoter,
    file_url:fileUrl

  });

  try {
    await bug.save();
    res.send("added");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getBugs", async (req, res) => {
  const allBugs = await BugModel.find();
  res.send(allBugs);
});

app.get("/bugDetails/:id", async (req, res) => {
  const id = req.params.id;
  const details = await BugModel.findById(id);
  res.send(details);
});

app.put("/updateBug/:id", async (req, res) => {
  const id = req.params.id;
  const { bugName, bugDisc, dueDate,Project,Repoter,fileUrl } = req.body;

  try {
    const updateBug = await BugModel.findByIdAndUpdate(id, {
      title: bugName,
      discription: bugDisc,
      due_date: dueDate,
      project:Project,
      reporter:Repoter,
      file_url:fileUrl
    });
    await updateBug.save();
    res.send("updated");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deleteBug/:id", async (req, res) => {
  const id = req.params.id;

  await BugModel.findByIdAndRemove(id).exec();
  res.send("delete");
});

if (process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"))
}


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
