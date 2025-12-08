import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="site__wrapper">
            <header className="banner site__section ">
                <img
                    src="src/assets/images/images.jpg"
                    alt=""
                    className="banner__logo"
                />
            </header>
        </div>
    );
}

export default Header;
