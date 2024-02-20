"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const ProductCard_1 = __importDefault(require("../../components/prodCard/ProductCard"));
require("./Home.css");
const img1_jpg_1 = __importDefault(require("../../public/images/img1.jpg"));
const Home = () => {
    const [products, setProducts] = (0, react_1.useState)([{}]);
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await axios_1.default.get('http://localhost:3000/api/prod/products');
                setProducts(response.data.products);
            }
            catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    return (<div className="card-container">
        {Array.isArray(products) && products.length > 0 ? (products.map((item) => <ProductCard_1.default key={item._id} id={item._id} image={img1_jpg_1.default} name={item.name} description={item.description} price={item.price} rating={item.rating}/>)) : (<p>Hello</p>)}
        </div>);
};
exports.default = Home;
