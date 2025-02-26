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

      {/* About Us Section */}
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          We are a dedicated team focused on delivering excellent customer service. Our mission is to provide
          top-notch solutions and ensure that our customers always feel heard and supported. Whether you're
          reaching out for help, feedback, or inquiries, we're here to assist you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default ContactUsForm;
