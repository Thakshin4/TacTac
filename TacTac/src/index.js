// index.js
import { SSL_CRT_FILE, SSL_KEY_FILE, MONGO_DB_CONNECTION } from process.env;

const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Post = require('./models/Post'); // Import the Post model

// Define routes
app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.get('/posts/:postId', async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.json(post);
});

app.post('/posts', async (req, res) => {
  const { text, image_url } = req.body;
  const newPost = new Post({ text, image_url });
  await newPost.save();
  res.status(201).json(newPost);
});

app.delete('/posts/:postId', async (req, res) => {
  await Post.findByIdAndDelete(req.params.postId);
  res.sendStatus(204);
});

// Set up HTTPS server
const privateKey = fs.readFileSync(path.join(__dirname, 'ssl', SSL_KEY_FILE), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'ssl', SSL_CRT_FILE), 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 3000;
httpsServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
