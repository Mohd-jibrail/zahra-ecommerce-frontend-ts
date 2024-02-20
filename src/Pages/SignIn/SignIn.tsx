import { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e:any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signIn', form); 
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
          <form onSubmit={handleSubmit} className="sign-up-form">
            <center><h2>User SignIn</h2></center><br></br>
            <input type="email" name="email" onChange={handleChange} required placeholder='Email...' />
            <input type="password" name="password" onChange={handleChange} required placeholder='Password...' />
            <button type="submit">Sign In</button>
          </form>
    );
};

export default SignIn;
