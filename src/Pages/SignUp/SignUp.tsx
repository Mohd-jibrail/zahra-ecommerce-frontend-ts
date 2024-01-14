import { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        password: '',
        gender:''
    });

    const handleChange = (e:any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e:any) => {
        e.preventDefault();
        console.log(form);
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signUp', form); 
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
            <center><h2>User SignUp</h2></center><br></br>
            <input type="text" name="firstName" onChange={handleChange} required placeholder='First Name...' />
            <input type="text" name="lastName" onChange={handleChange} required placeholder='Last Name...' />
            <input type="text" name="contact" onChange={handleChange} required placeholder='Mobile Number...' />
            <input type="email" name="email" onChange={handleChange} required placeholder='Email...' />
            <input type="password" name="password" onChange={handleChange} required placeholder='Password...' />
            <input type="text" name="gender" onChange={handleChange} required placeholder='Gender...' />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
