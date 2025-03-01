import { useState } from 'react';
import './ContactUsForm.css';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      {/* Contact Form Section */}
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
