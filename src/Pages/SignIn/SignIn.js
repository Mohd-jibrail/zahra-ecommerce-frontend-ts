"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
require("./SignIn.css");
const react_router_dom_1 = require("react-router-dom");
const SignIn = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [form, setForm] = (0, react_1.useState)({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios_1.default.post('http://localhost:3000/api/auth/signIn', form);
            console.log(response.data);
            navigate('/');
        }
        catch (error) {
            console.error(error);
        }
    };
    return (<form onSubmit={handleSubmit} className="sign-up-form">
            <center><h2>User SignIn</h2></center><br></br>
            <input type="email" name="email" onChange={handleChange} required placeholder='Email...'/>
            <input type="password" name="password" onChange={handleChange} required placeholder='Password...'/>
            <button type="submit">Sign In</button>
          </form>);
};
exports.default = SignIn;
