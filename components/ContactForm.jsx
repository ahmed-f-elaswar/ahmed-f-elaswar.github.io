'use client';

import { useState } from 'react';

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '1fd10ec6-4de8-4c54-a1aa-e4537530ae49';
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'a.f.elaswar@gmail.com';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

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

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // No Web3Forms key configured at build time: render a mailto fallback so the
  // form never silently pretends to submit.
  if (!WEB3FORMS_KEY) {
    const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      'Portfolio contact'
    )}`;
    return (
      <div className="contact-fallback">
        <p>
          The contact form isn&apos;t wired up on this build &mdash; the easiest way
          to reach me is by email:
        </p>
        <a className="submit-btn" href={mailtoHref}>
          Email {CONTACT_EMAIL}
        </a>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'idle', message: '' });
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus({ state: 'submitting', message: '' });

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        subject: `Portfolio contact from ${formData.name.trim()}`,
        from_name: 'Portfolio contact form',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus({
          state: 'success',
          message: `Thanks, ${formData.name.trim()}! Your message has been sent.`,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          state: 'error',
          message:
            data.message ||
            'Something went wrong sending your message. Please try email instead.',
        });
      }
    } catch {
      setStatus({
        state: 'error',
        message: 'Network error sending your message. Please try email instead.',
      });
    }
  }

  const submitting = status.state === 'submitting';

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
          disabled={submitting}
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
          disabled={submitting}
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
          disabled={submitting}
        />
        {errors.message && <span className="error-msg">{errors.message}</span>}
      </div>
      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? 'Sending\u2026' : 'Send Message'}
      </button>
      {status.state === 'success' && (
        <div className="success-msg" role="status">
          {status.message}
        </div>
      )}
      {status.state === 'error' && (
        <div className="error-banner" role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}
