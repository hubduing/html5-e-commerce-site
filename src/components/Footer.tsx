import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="footer section-p1">
        <div className="col">
          <img className="logo" src="./img/logo.png" alt="logo"/>
            <h4>Contact</h4>
            <p><strong>Adress: </strong> Mira, 8, Lysva</p>
            <p><strong>Phone: </strong> + 555 898552483 add (55) </p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
              <h4>Follow us</h4>
              <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-prinerest-p"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Inforamion</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Term & Conditions</a>
          <a href="#">Contact US</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App store or Google Play</p>
          <div className="row">
            <img src="./img/app.jpg" alt="app"/>
              <img src="./img/play.jpg" alt="google"/>
          </div>
          <p>Secured Payment Gateways</p>
          <img src="./img/pay.png" alt="pay"/>
        </div>

        <div className="copyright">
          <p>2021, Tech, E-commerce</p>
        </div>
      </footer>
    </>
  )
}
