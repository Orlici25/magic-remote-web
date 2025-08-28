import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const features = [
  { icon: '🎮', k: 'universal' },
 
  { icon: '🔎', k: 'scan' },
  { icon: '⭐', k: 'favorites' },
  { icon: '📋', k: 'clone' },
  { icon: '🎨', k: 'themes' },
];

export default function Features() {
  const { t } = useTranslation();
  return (
    <>
      <section className="header" style={{ marginBottom: 16 }}>
        <h1>{t('features.header.title')}</h1>
        <p>{t('features.header.subtitle')}</p>
      </section>
      <section className="features">
        <div className="feature-list">
          {features.map((f, i) => (
            <div key={i} className="feature">
              <div className="feature-icon" aria-hidden>{f.icon}</div>
              <h3>{t(`features.items.${f.k}.title`)}</h3>
              <p>{t(`features.items.${f.k}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
