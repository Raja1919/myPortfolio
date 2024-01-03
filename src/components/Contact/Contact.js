import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message,
    };

    try {
      const response = await emailjs.send(
        "service_3bzc1em",
        "template_e987548",
        templateParams,
        "bei0Qqw8NQO9r6lDN"
      );

      console.log(response);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="contact_wrapper">
      <div className="title">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-form">
        <div className="input-fields">
          <input
            type="text"
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="msg">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="btn" onClick={handleSubmit}>
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
