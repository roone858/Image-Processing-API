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
  const inputPath = path.join(__dirname + `/images/${req.query.filename}.jpg`);
  const outputPath = path.join(
    __dirname +
      `/images/resized/${req.query.filename}${req.query.height}x${req.query.width}.jpg`
  );
  const filename = req.query.filename;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  try {
    if (Number.isNaN(width) || width < 1) {
      res.send(
        "Please provide a positive numerical value for the 'width' query segment."
      );
      return;
    }
    if (Number.isNaN(height) || height < 1) {
      res.send(
        "Please provide a positive numerical value for the 'height' query segment."
      );
      return;
    }
    if (!fs.existsSync(outputPath)) {
      if (isImageExsist(inputPath)) {
        await resizeImage(`${filename}`, width, height);
      } else {
        res.status(404).send("Oh uh, something went wrong File not found");
        return;
      }
    }

    res.status(200).sendFile(outputPath);
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
