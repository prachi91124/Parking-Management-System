import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
    <div class="footer-container">
      <div class="footer-section company-info">
        <h2>Parking Management</h2>
        <p>Your trusted solution for efficient parking management and hassle-free bookings.</p>
        <p>&copy; 2024 Parking Management. All rights reserved.</p>
      </div>

      <div class="footer-section links">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/slots">Parking Slots</a></li>
          <li><a href="/bookings">Bookings</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>

      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: support@parkingmanagement.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Parking Lane, City, Country</p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
