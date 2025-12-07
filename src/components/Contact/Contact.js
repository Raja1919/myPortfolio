import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message,
    };

    try {
      await emailjs.send(
        "service_3bzc1em",
        "template_e987548",
        templateParams,
        "bei0Qqw8NQO9r6lDN"
      );

      setStatus("Message sent. Thanks for reaching out!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact_wrapper">
      <div className="contact_inner">
        <div className="title">
          <p className="eyebrow">Get in touch</p>
          <h1>Let’s build together</h1>
          <p className="contact_lede">
            Share a project idea, collaboration, or just say hello. Responses typically within one
            business day.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-fields">
            <label className="label">
              Name
              <input
                type="text"
                className="input"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="label">
              Email
              <input
                type="email"
                className="input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="label">
              Phone (optional)
              <input
                type="text"
                className="input"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <div className="msg">
            <label className="label">
              Project details
              <textarea
                placeholder="What would you like to build?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
            <button className="btn" type="submit">
              Send message
            </button>
            {status && <p className="status">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
