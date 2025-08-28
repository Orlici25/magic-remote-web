import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {t('brand')}.</p>
        <div className="footer-links">
          <a href="/privacy" aria-label="Privacy Policy">{t('footer.privacy')}</a>
          <a href="/terms" aria-label="Terms of Service">{t('footer.terms')}</a>
          <a href="mailto:support@magicremote.com" aria-label="Email Support">{t('footer.support')}</a>
        </div>
      </div>
    </footer>
  );
}
