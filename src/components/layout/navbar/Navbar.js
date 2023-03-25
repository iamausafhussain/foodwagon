import React from "react";
import "./Navbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../../images/logo.png";

function Navbar() {
	return (
		<div className="navbar-container">
			<ul className="desktop-nav">
				<li>
					<img src={Logo} className="link-logo" />
				</li>
				<li>
					<div className="user-location">
						<p className="user-location-delivery">Deliver to: </p>
						<LocationOnIcon className="mat-icon" />
						<p className="user-location-current">Current Location</p>
						<h4>Infocity, Bhubaneswar</h4>
					</div>
				</li>
				<li>
					<button className="login-button">
						<PersonIcon className="mat-icon" />
						Login
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
