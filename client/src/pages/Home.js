import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NavLogin from "../components/NavbarLogin/index";
import Button from "../components/ButtonLink/index"
import "./style.css";
import logo from "./images/logo-yellow.png";
import { Link } from "react-router-dom"

const styleLogin = { color: "#EBC023", textShadow: "0 0 10px #0F0E0C" }
const styleLink = { fontFamily: "Roboto", color: "#302C26", fontWeight: "bold", paddingRight: "2rem", paddingLeft: "2rem" }
const styleButton = { backgroundColor: "#EBC023" }
const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .3)" }
const textShadow = { textShadow: "0 0 10px #0F0E0C" }

function Home() {
    return (
        <div className="home overflow-auto">
            <Navbar className="shadow" style={styleNavbar}>
                <div className="ml-auto">
                    <NavLogin style={styleLogin} />
                </div>
            </Navbar>
            <div style={{ fontFamily: "Barlow" }}>
                <br />
                <br />
                <div className="text-center">
                    <img src={logo} className="home-pic img-fluid px-5" />
                </div>
                <h4 className="text-center px-4" style={styleLogin}>Crash or Share a campsite and enjoy camping with others</h4>
                <div className="text-center mt-5">
                    <Button link="/signup" name="START NOW" style={styleButton} styleLink={styleLink} />
                </div>
                <br />
                <br />
                <div className="py-2 mx-3 shadow" style={{ backgroundColor: "rgba(15, 14, 12, .3)" }}>
                    <h5 className="text-center text-light px-5 homeText" style={textShadow}>Have a campground reservation with room for extra people?</h5>
                    <h5 className="text-center text-light px-5 homeText my-3" style={textShadow}>Want to go camping to a National Park, but all campsites are already full?</h5>
                    <h5 className="text-center text-white px-5 homeText my-3" style={textShadow}>Find like-minded people to share a campsite with. </h5>
                    <h5 className="text-center"><Link style={{ color: "#EBC023" }} to="/signup" >Sign Up Now!</Link></h5>
                </div>
            </div>
        </div>
    );
}

export default Home;