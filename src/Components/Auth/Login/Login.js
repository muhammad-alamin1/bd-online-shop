import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    let history = useHistory();

    // submit form 
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);

            await login(email, password);

            history.push('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Authentication Failed.!');
        }
    }

    return (
        <div id="signIn">
            <h3>Sign In Your Account</h3> <br />
            <form className="login form" action="#" onSubmit={handleSubmit} >
                <div className="textInput">
                    <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className="material-icons-outlined"> alternate_email </span>
                </div> <br />

                <div className="textInput">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className="material-icons-outlined"> lock </span>
                </div> <br />

                {
                    error && <p className="error">{error}</p>
                }

                <button disabled={loading} className="button" type="submit">
                    <span>Sign In</span>
                </button>

                <div className="info">Don't have an account? <Link to="/signup">Signup</Link> </div>
            </form>
        </div>
    )
}
