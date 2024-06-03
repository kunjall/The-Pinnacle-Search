import React from 'react';
import '../../assets/styles/contact.css';

const ContactUs = () => {
  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Please let us know what you would like to inquire about, and our team will get back to you promptly!          </p>

          {/* <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div> */}
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="https://formspree.io/f/xjvnqrdz" method="POST" autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="email" name="email" className="input" required placeholder='Email'/>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" required placeholder='Phone'/>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" required placeholder='Message'></textarea>

            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
