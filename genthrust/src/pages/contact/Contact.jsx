import React from "react";
import Gps from "../../components/Gps";
import Footer from "../../components/Footer";
import emailjs from "emailjs-com";
import "../contact/Contact.css";
import "../../App.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent!");
        },
        (error) => {
          console.log(error.text);
          alert("something went wrong!");
        }
      );
  }

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <form
        className="form"
        style={{ width: "600px" }}
        action="/contact"
        onSubmit={sendEmail}
      >
        <label className="name" for="name">
          Name:
        </label>
        <input
          className="name-field"
          type="text"
          name="user_name"
          label="Name"
        />
        <br />
        <label for="email">Email:</label>
        <input
          className="email-field"
          type="email"
          name="user_email"
          label="Email"
        />
        <br />
        <label for="message">Message:</label>
        <input
          className="message-field"
          type="textarea"
          name="message"
          label="Message"
        />
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <Gps className="gps" />
      <Footer />
    </div>
  );
};

export default Contact;
