"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizedImagePath = exports.resizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImage = (filename, height, width) => {
  (0, sharp_1.default)(path_1.default.resolve(`images/${filename}.jpg`))
    .resize({ width: width, height: height, fit: sharp_1.default.fit.cover })
    .toBuffer();
};
exports.resizeImage = resizeImage;
const resizedImagePath = (filename, height, width) => {
  return `public/images/resized/${filename}${height}x${width}.jpg`;
};
exports.resizedImagePath = resizedImagePath;
