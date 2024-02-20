"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ProductStore_1 = __importDefault(require("./store/ProductStore"));
const ProductDetailes_1 = __importDefault(require("./Pages/Details/ProductDetailes"));
const Header_1 = __importDefault(require("./components/Header/Header"));
const Footer_1 = __importDefault(require("./components/Footer/Footer"));
const SignUp_1 = __importDefault(require("./Pages/SignUp/SignUp"));
const SignIn_1 = __importDefault(require("./Pages/SignIn/SignIn"));
const Home_1 = __importDefault(require("./Pages/Home/Home"));
require("./App.css");
function App() {
    return (<>
     <ProductStore_1.default>
      <react_router_dom_1.BrowserRouter>
          <Header_1.default></Header_1.default>
            <react_router_dom_1.Routes>
              <react_router_dom_1.Route path='/' element={<Home_1.default />}/>
              <react_router_dom_1.Route path='/details/:id' element={<ProductDetailes_1.default />}/>
              <react_router_dom_1.Route path='/signIn' element={<SignIn_1.default />}/>
              <react_router_dom_1.Route path='/SignUp' element={<SignUp_1.default />}/>
            </react_router_dom_1.Routes>
          <Footer_1.default></Footer_1.default>
        </react_router_dom_1.BrowserRouter>
      </ProductStore_1.default>
     </>);
}
exports.default = App;
