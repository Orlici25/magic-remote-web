import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="features" style={{ gridTemplateColumns: '1fr' }}>
      <div className="feature">
        <h3>{t('contact.title')}</h3>
        {sent ? (
          <p>{t('contact.thanks')} <strong>{form.email || t('contact.email')}</strong>.</p>
        ) : (
          <form onSubmit={onSubmit} className="contact-form">
            <label>
              {t('contact.name')}
              <input name="name" value={form.name} onChange={onChange} placeholder={t('contact.placeholder.name')} required />
            </label>
            <label>
              {t('contact.email')}
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder={t('contact.placeholder.email')} required />
            </label>
            <label>
              {t('contact.message')}
              <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder={t('contact.placeholder.message')} required />
            </label>
            <button type="submit" className="download-button">{t('contact.send')}</button>
          </form>
        )}
        <p style={{ marginTop: 16 }}>{t('contact.or')} <a href="mailto:support@magicremote.com">support@magicremote.com</a></p>
      </div>
    </section>
  );
}
