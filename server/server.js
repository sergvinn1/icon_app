const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/iconsDB');

const iconSchema = new mongoose.Schema({
  name: String,
  iconNumber: String,
  cabinetNumber: String,
  additionalInfo: String,
});

const Icon = mongoose.model('Icon', iconSchema);

app.get('/icons', async (req, res) => {
  const icons = await Icon.find();
  res.json(icons);
});

app.post('/icons', async (req, res) => {
  const newIcon = new Icon(req.body);
  await newIcon.save();
  res.status(201).json(newIcon);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
