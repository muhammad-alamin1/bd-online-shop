import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./header.css";

const Header = () => {
    const { currUser, logout } = useAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    BD Online Shop
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li class="nav-item">
                            {/* <Link to="/inventory">Inventory </Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to="/review">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search Items"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>

                    {currUser ? (
                        <>
                            <Link to="/user/profile">
                                <span className="material-icons-outlined text-white" title="Account">
                                    account_circle
                                </span>
                            </Link>
                            <span className="text-white">{currUser.displayName}</span>
                            <span
                                className="material-icons-outlined text-white"
                                title="Logout"
                                onClick={logout}
                                style={{ cursor: "pointer" }}
                            >
                                logout
                            </span>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button type="button" className="btn-brand me-2">
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button type="button" className="btn-brand">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
