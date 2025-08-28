import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // Apply direction based on language
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">{t('brand')}</Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>{t('nav.home')}</NavLink>
          <NavLink to="/features" className={({isActive}) => isActive ? 'active' : ''}>{t('nav.features')}</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>{t('nav.contact')}</NavLink>
          <select aria-label="Language" className="lang-select" value={i18n.language} onChange={(e)=>changeLang(e.target.value)}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
