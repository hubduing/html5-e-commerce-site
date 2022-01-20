import React from "react";

export const ContactDetail = () => {
  return (
    <>
      <section className="contact-details section-p1">
        <div className="details">
          <span>get in toush</span>
          <h2>Visit one of our agency location or contact us today</h2>
          <h3>head office</h3>
          <ul>
            <li>
              <i className="fal fa-map"></i>
              <p>56 glassford street glasgow g1 1UL new york</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>qustion@example.com</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to saturday: 9.00am to 16.pm</p>
            </li>
          </ul>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4510.693042512763!2d57.8108793155112!3d58.100077227159815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a38c1c00d856f53!2z0KHQutC-0LLQvtGA0L7QtNC60LA!5e0!3m2!1sru!2sru!4v1642686870917!5m2!1sru!2sru"
            width="600"
            height="450"
            loading="lazy">
          </iframe>
        </div>
      </section>
    </>
  )
}
