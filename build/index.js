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
const express_1 = __importDefault(require("express"));
const resizeImage_1 = require("./resizeImage");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("http://localhost:3000/api/image/resize/?width=(w)&height=(h)&filename=(filename)");
});
app.get("/api/image/resize/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputPath = path_1.default.join(__dirname + `/images/${req.query.filename}.jpg`);
    const outputPath = path_1.default.join(__dirname +
        `/images/resized/${req.query.filename}${req.query.height}x${req.query.width}.jpg`);
    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    try {
        if (Number.isNaN(width) || width < 1) {
            res.send("Please provide a positive numerical value for the 'width' query segment.");
            return;
        }
        if (Number.isNaN(height) || height < 1) {
            res.send("Please provide a positive numerical value for the 'height' query segment.");
            return;
        }
        if (!fs_1.default.existsSync(outputPath)) {
            if ((0, resizeImage_1.isImageExsist)(inputPath)) {
                yield (0, resizeImage_1.resizeImage)(`${filename}`, width, height);
            }
            else {
                res.send("image not exists");
                return;
            }
        }
        res.sendFile(outputPath);
    }
    catch (err) {
        if (err instanceof Error) {
            res.render("helow", { message: err.message });
        }
        else {
            console.log("Unexpected error", err);
        }
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
