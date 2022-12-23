const sharp = require("sharp");
const fsPromises = require('fs');
const resizeImage = async (inputFileName, width, height, outputFileName) => {
  console.log("creating output file");
  await sharp(inputFileName).resize(width, height).toFile(outputFileName);
  return outputFileName;
};

const checkFileExists = async (fileResourceName) => {
  try {
    const fileVar = await fsPromises.open(fileResourceName, 'r');
    fileVar.close();
    return true;
  } catch (err) {
    return false;
  }
};
console.log(__dirname )
console.log(checkFileExists(__dirname+`src/images/fjord.jpg`))
