"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const App_1 = __importDefault(require("./App"));
require("./index.css");
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
(0, reportWebVitals_1.default)();
