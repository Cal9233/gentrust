import React, { useState } from "react";
import axios from "axios";
import Gps from "../components/Gps";
import Footer from "../components/Footer";
import "../App.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    setDisabled(true);
    axios
      .post("/api/email", { disabled, emailSent })
      .then((res) => {
        if (res.data.success) {
          setDisabled(false);
          setEmailSent(true);
        } else {
          setDisabled(false);
          setEmailSent(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setDisabled(false);
        setEmailSent(false);
      });
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <form style={{ width: "600px" }} onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} value={name} />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <br />
        <label for="message">Message:</label>
        <input
          type="textarea"
          name="message"
          onChange={handleChange}
          value={message}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <Gps />
      <Footer />
    </div>
  );
};

export default Contact;
