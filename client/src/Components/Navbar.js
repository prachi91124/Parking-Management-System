import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
      <nav className="parking-navbar">
          <div className="logo">
              <a href="/">Parking System</a>
          </div>
          <ul className="nav-links">
              <li>
                  <a href="/home">Home</a>
              </li>
              <li>
                  <a href="/slots">Parking Slots</a>
              </li>
              <li>
                  <a href="/bookings">Bookings</a>
              </li>
              <li>
                  <a href="/profile">Profile</a>
              </li>
          </ul>
      </nav>
  );
}

export default Navbar
