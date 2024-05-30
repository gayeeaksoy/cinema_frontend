
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            password,
        };

        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Handle successful signup (e.g., show a success message, redirect to another page)
            } else {
                console.error('Signup failed');
                // Handle signup failure (e.g., show an error message)
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleLoginRedirect = () => {
        // Implement login page navigation logic here, e.g., using react-router
        console.log("Redirect to login page");
    };

    return (
        <div className='container1'>
            <Link to="/">
            <button className="back-button1">&lt;</button>
            </Link>
            <div className="header1">
                <div className="text1">Sign Up</div>
            </div>
            <div className="inputs1">
                <div className="input1">
                    <img src={user_icon} alt="User" />
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input1">
                    <img src={email_icon} alt="Email" />
                    <input
                        type="email"
                        placeholder='Email Id'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input1">
                    <img src={password_icon} alt="Password" />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="submit-container">
                <Link to="/login">
                <div className="submit" onClick={handleSignup}>Sign Up</div>
                </Link>
                <Link to="/login">
                <div className="submit gray" onClick={handleLoginRedirect}>Login</div>
                </Link>
            </div>
        </div>
    );
};

export default Signup;