import sharp from "sharp";
import path from "path";
import fs from "fs";
export const isImageExsist = (pathToCkeck: string) => {
  if (fs.existsSync(pathToCkeck)) {
    return true;
  } else {
    return false;
  }
};
export const resizeImage = async (
  inputFileName: string,
  width: number,
  height: number
): Promise<void> => {
  console.log("creating new output file");
  try {
    await sharp(path.resolve(`src/images/${inputFileName}.jpg`))
      .resize(width, height)
      .toFile(
        path.resolve(
          `src/images/resized/${inputFileName}${height}x${width}.jpg`
        )
      );
  } catch (err) {
    throw new Error("Input file is missing");
  }
};
