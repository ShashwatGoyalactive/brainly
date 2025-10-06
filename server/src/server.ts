import dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import { userMiddleware } from "./middleware";
import { random } from "./utility";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.post("/api/v1/signup", async (req, res) => {
  // add zod validation , hash the password
  const { username, password } = req.body;
  try {
    await UserModel.create({
      username,
      password,
    });
  } catch (e) {
    return res.status(411).json({ message: "User already exists" });
  }

  res.json({
    message: "User signed up",
  });
});

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ username, password });

    if (existingUser) {
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET as string );
      res.json({
        message: "signed in successfully",
        token,
      });
    }
  } catch (e) {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { title, link } = req.body;
  const userId = req.userId;

  try {
    await ContentModel.create({
      link,
      title,
      userId,
    });

    res.json({
      message: "Content created successfully",
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error" });
  }
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = req.userId;

  try {
    const content = await ContentModel.find({ userId: userId }).populate(
      "userId",
      "username"
    );

    res.json(content);
  } catch (e) {
    res.status(404).json({ message: "No content found " });
  }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = req.userId;
  try {
    await ContentModel.deleteOne({ userId: userId });
    res.json({ message: "Content deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/v1/share", userMiddleware, async (req, res) => {
  const share = req.body.share;
  if (share) {
    const existingLink = await LinkModel.findOne({ userId: req.userId });
    if (existingLink) {
      return res.json({
        hash: existingLink.hash,
      });
    }

    await LinkModel.create({
      userId: req.userId,
      hash: random(10),
    });
  } else {
    await LinkModel.deleteOne({ userId: req.userId });
  }
  res.status(200).json({ message: "Updated sharable link" });
});

app.get("/api/v1/brain/:shareLink", userMiddleware, async (req, res) => {
  const hash = req.params.shareLink;
  const link = await LinkModel.findOne({ hash });

  if (!link) {
    res.status(411).json({ message: "Incorrect input" });
    return;
  }

  const content = await ContentModel.findOne({ userId: link.userId }).populate(
    "userId",
    "username"
  );
  res.json(content);
});

app.listen(process.env.Port, () => {
  console.log("Server started on port 3000");
});
