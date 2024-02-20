"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./Banner.css");
const img1_jpg_1 = __importDefault(require("../../public/images/img1.jpg"));
const img2_jpg_1 = __importDefault(require("../../public/images/img2.jpg"));
const Banner = () => {
    const images = [img1_jpg_1.default, img2_jpg_1.default]; // replace with your image paths
    const [currentImageIndex, setCurrentImageIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000); // change image every 3 seconds
        return () => clearInterval(timer); // cleanup on unmount
    }, [currentImageIndex, images.length]);
    return (<div className="banner">
            <img src={images[currentImageIndex]} alt="banner"/>
        </div>);
};
exports.default = Banner;
