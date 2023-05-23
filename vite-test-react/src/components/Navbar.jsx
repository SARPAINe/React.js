import React from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={classes["navbar-header"]}>
                <img src={logo} alt="logo" className={classes.logo} />
                <h1 className={classes["navbar-heading"]}>Random Lady</h1>
            </div>
            <ul className={classes["navbar-links"]}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">What I do</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Testimonial</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            {/* navbar footer */}
            <div className={classes["navbar-footer"]}>
                <ul className={classes["social-links"]}>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
