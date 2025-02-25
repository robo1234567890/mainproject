import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '/workspaces/mainproject/myproject/src/Header.css';  // Import external CSS

function Header() {
    return (
         <div className="headercontainer">
             <h1 className='h1header'> Event Planner</h1>
                <Link className="profile-icon" to="/profile">
                <FontAwesomeIcon icon={faUser} />
                </Link>
                <ul className="navbar-links">
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/venues">Venues</Link></li>
                     <li><Link to="/vendors">Vendors</Link></li>
                </ul>
        </div>
);
}

export default Header;



// <nav className="navbar">
// {/* Brand */}
// <Link className="navbar-brand" to="/">Event Planner</Link>

// {/* Navbar Links */}
// <ul className="navbar-links">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/venues">Venues</Link></li>
//     <li><Link to="/vendors">Vendors</Link></li>
// </ul>

// {/* Profile Icon */}
// <Link className="profile-icon" to="/profile">
//     <FontAwesomeIcon icon={faUser} />
// </Link>
// </nav>
