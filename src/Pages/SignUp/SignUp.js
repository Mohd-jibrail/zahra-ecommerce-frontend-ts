"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
require("./SignUp.css");
const react_router_dom_1 = require("react-router-dom");
const SignUp = () => {
    const [form, setForm] = (0, react_1.useState)({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        password: '',
        gender: ''
    });
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            const response = await axios_1.default.post('http://localhost:3000/api/auth/signUp', form);
            if (response.data.status === 'Success') {
                navigate('/');
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    return (<form onSubmit={handleSubmit} className="sign-up-form">
            <center><h2>User SignUp</h2></center><br></br>
            <input type="text" name="firstName" onChange={handleChange} required placeholder='First Name...'/>
            <input type="text" name="lastName" onChange={handleChange} required placeholder='Last Name...'/>
            <input type="text" name="contact" onChange={handleChange} required placeholder='Mobile Number...'/>
            <input type="email" name="email" onChange={handleChange} required placeholder='Email...'/>
            <input type="password" name="password" onChange={handleChange} required placeholder='Password...'/>
            <input type="text" name="gender" onChange={handleChange} required placeholder='Gender...'/>
            <button type="submit">Sign Up</button>
        </form>);
};
exports.default = SignUp;
