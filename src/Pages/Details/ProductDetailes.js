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
const img1_jpg_1 = __importDefault(require("../../public/images/img1.jpg"));
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const ProductDetailes_module_css_1 = __importDefault(require("./ProductDetailes.module.css"));
const ProductDetails = () => {
    const [product, setProduct] = (0, react_1.useState)();
    const { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await axios_1.default.get(`http://localhost:3000/api/prod/product/${id}`);
                setProduct(response.data.product);
            }
            catch (e) {
                console.log(e);
            }
        };
        fetchData();
    });
    return (<>
        <table className={ProductDetailes_module_css_1.default.detailCard}>
          <tr>
            <td className={ProductDetailes_module_css_1.default.productImage}>
              <img src={img1_jpg_1.default} alt={img1_jpg_1.default} className={ProductDetailes_module_css_1.default.ProdImage}/>
            </td>
            <td className={ProductDetailes_module_css_1.default.productInfo}>
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <p>Price: ${product?.price} Kg</p>
                <p>Rating: {product?.ratings}</p>
                <button className='buyButton'>Buy</button>
            </td>
          </tr>
        </table>
        </>);
};
exports.default = ProductDetails;
