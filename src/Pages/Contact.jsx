import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim().length >= 10;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    console.log(form);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        subject: "general",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="subtitle">We usually reply within 24 hours 🚀</p>

      {submitted && <div className="success">Message sent successfully ✔</div>}

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
        >
          <option value="general">General Query</option>
          <option value="listing">Listing Issue</option>
          <option value="partnership">Partnership</option>
        </select>

        <textarea
          name="message"
          placeholder="Write your message (min 10 chars)..."
          value={form.message}
          onChange={handleChange}
        />

        <div className="counter">
          {form.message.length}/200
        </div>

        <button disabled={!isValid}>
          {isValid ? "Send Message" : "Fill all fields"}
        </button>

      </form>
    </div>
  );
}

export default Contact;