"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.isImageExsist = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const isImageExsist = (pathToCkeck) => {
    if (fs_1.default.existsSync(pathToCkeck)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isImageExsist = isImageExsist;
const resizeImage = (inputFileName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("creating new output file");
    try {
        yield (0, sharp_1.default)(path_1.default.resolve(`src/images/${inputFileName}.jpg`))
            .resize(width, height)
            .toFile(path_1.default.resolve(`src/images/resized/${inputFileName}${height}x${width}.jpg`));
    }
    catch (err) {
        throw new Error("Input file is missing");
    }
});
exports.resizeImage = resizeImage;
