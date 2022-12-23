import express, { Request, Response } from "express";
import { resizeImage, isImageExsist } from "./resizeImage";
import fs from "fs";
import path from "path";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "http://localhost:3000/api/image/resize/?width=(w)&height=(h)&filename=(filename)"
  );
});

app.get("/api/image/resize/", async (req: Request, res: Response) => {
  const inputPath = path.resolve(`src/images/${req.query.filename}.jpg`);
  const outputPath = path.resolve(
    `src/images/resized/${req.query.filename}${req.query.height}x${req.query.width}.jpg`
  );
  const filename = req.query.filename;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  try {
    if (!fs.existsSync(outputPath)) {
      if (isImageExsist(inputPath)) {
        await resizeImage(`${filename}`, width, height);
      } else {
        res.send("image not exists");
        return;
      }
    }
    res.sendFile(outputPath);
  } catch (err) {
    if (err instanceof Error) {
      res.render("helow", { message: err.message });
    } else {
      console.log("Unexpected error", err);
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
