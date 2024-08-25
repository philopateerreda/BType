import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {



    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link className='active' to="/">Home</Link>
                <Link to="/battle">Battle</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/stats">Stats</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/league">League</Link>
                <Link to="/season">Season</Link>
            </div>
            <div className="account">
                <span className="account-circle">👤</span>
            </div>
        </nav>
    );
}

export default Navbar;
