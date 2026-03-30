'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess('');
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSuccess(
        `Thank you, ${formData.name.trim()}! Your message has been sent successfully.`
      );
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(''), 5000);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="contact-email">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'input-error' : ''}
        />
        {errors.message && <span className="error-msg">{errors.message}</span>}
      </div>
      <button type="submit" className="submit-btn">
        Send Message
      </button>
      {success && <div className="success-msg">{success}</div>}
    </form>
  );
}
