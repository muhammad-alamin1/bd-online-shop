import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import './signup.css';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const history = useHistory();

    // submit form
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);

            await signup(email, password, username);

            history.push("/");
        } catch (error) {
            setError("Failed to crate an account.!");
            setLoading(false);
        }
    };

    // title
    document.title = "Sign Up";
    return (
        <div className="login-form container">
            <div className="row align-items-center">
                <div className="col-md-6  login-left my-5">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">User name</label>
                        <input
                            type="text"
                            name="userName"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        {error && <p className="error">{error}</p>}
                        <input type="submit" className="btn-brand" value="Sign Up" />
                    </form>
                    <br />
                    <span>
                        Already have an account?<Link to="/login"> Login </Link>
                    </span>
                </div>
                <div className="col-md-6 login-right">
                </div>
            </div>
        </div>
    );
};

export default SignUp;
