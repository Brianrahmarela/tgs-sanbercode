import express from "express";
import { single, multiple } from "../middlewares/upload.middleware";
import { handleUpload } from "../utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("Please upload a file");
    }
    const result = await handleUpload(file.buffer);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload/multiple", multiple, async (req, res) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      return res.status(400).send("Please upload files");
    }
    const results = await Promise.all(files.map(file => handleUpload(file.buffer)));
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
