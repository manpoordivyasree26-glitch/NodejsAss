import { Router } from "express";
import fs from "fs";
import upload from "../middleware/upload.middleware.js";
import { uniqueEmail } from "../middleware/uniqueEmail.middleware.js";
import cloudinary from "../config/cloudinary.config.js";

const router = Router();
const DB_PATH = "./src/db.json";

router.post("/signup", upload, uniqueEmail, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Profile image is required" });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      async (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Cloudinary Upload Failed" });
        }

        const db = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

        const newUser = {
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profilePic: result.secure_url,
        };

        db.users.push(newUser);
        fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));

        res.json({
          message: "User registered successfully",
          user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            profilePic: newUser.profilePic,
          },
        });
      }
    );

    uploadStream.end(req.file.buffer);

  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
