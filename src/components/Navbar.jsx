import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faBars, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="search">
                <input
                    type="text"
                    placeholder="
                Search on Connect"
                />
                <FontAwesomeIcon icon={faSearch} />
            </div>

            <div className="logo">
                <h1>CONNECT</h1>
            </div>

            <div className="my-profile">
                <img
                    className="my-profile-picture"
                    src="https://i.pinimg.com/564x/e2/72/52/e272528102be868e5be2e1e17e686f36.jpg"
                />
                <h3 className="my-user-name">Adina Maria</h3>
                <button>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
            </div>
        </div>
    );
}
