import React from 'react';
import './style.css';
import './fontawesome-free-5.15.3-web/css/all.min.css';
import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <div>
      <header className="header">
        <img src="images/logo.png" id="logo" alt="" />
        <nav className="navbar">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">services</a>
          <a href="#">gallery</a>
          <a href="#">contact</a>
        </nav>
        <div className="icons">
          <div id="menubar" className="fas fa-bars"></div>
          <a href="#">Admin</a>
        </div>
      </header>

      <div className="background-image">
        <div className="background-content">
          <h1>provide an exceptional <br /> patient experience</h1>
          <p align="justify">We are dedicated to supporting healthcare institutions in their pursuit of excellence. Our Hospital Management System is designed to empower healthcare professionals, administrators, and patients alike, fostering a holistic and efficient approach to healthcare delivery. </p>
          <a href="#">Read more</a>
        </div>
      </div>

      <div className="about">
        <div className="main-about">
          <div className="inner-about">
            <div className="about-content">
              <h1>about us</h1>
              <p align="justify">Our hospital is a leading Health management system based in Bengaluru(KA).<br />
                Welcome to the Hospital Management System (HMS), a comprehensive solution designed to streamline and enhance the operations of healthcare facilities. <br /> Our cutting-edge software is developed with a deep understanding of the unique challenges faced by modern hospitals and clinics. <br /> With a commitment to efficiency, accuracy, and patient-centric care, our HMS empowers healthcare providers to deliver exceptional services while maintaining seamless administration.</p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className="inner-about">
            <div className="inner-about-image">
              <img src="images/chiness.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the JSX code */}
      {/* ... */}

      <script src="script.js"></script>
    </div>
  );
}

export default App;
