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
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = require("../resizeImage");
describe("images", () => {
    it("Resolves succesfully when provided the right filename, height and width parameters", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, resizeImage_1.resizeImage)(`fjord`, 200, 200)).toBeResolved();
    }));
    it("Throws a missing input error if the wrong filename is provided", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, resizeImage_1.resizeImage)("alaska", 200, 200)).toBeRejectedWithError(Error, "Input file is missing");
    }));
});
