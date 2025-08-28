import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import img1 from '../images/1000249464.jpg';
import img2 from '../images/1000249465.jpg';
import img3 from '../images/1000249466.jpg';
import img4 from '../images/1000249469.jpg';
import img5 from '../images/1000249470.jpg';

export default function Home() {
  const { t } = useTranslation();
  const images = [img1, img2, img3, img4, img5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImgError = (e) => { e.currentTarget.src = '/logo512.png'; };

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextSlide = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      <section className="header">
        <h1>{t('header.title')}</h1>
        <p>{t('header.subtitle')}</p>
      </section>

      <section className="features">
        <div className="feature-list">
          <div className="feature">
            <h3>{t('home.remoteExamples')}</h3>
            <div className="carousel">
              <div className="carousel-container">
                <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                      <img src={image} alt={`Remote ${index + 1}`} className="carousel-image" loading="lazy" onError={handleImgError} />
                    </div>
                  ))}
                </div>
                <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
                <button className="carousel-button next" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download">
        <h2>{t('home.downloadTitle')}</h2>
        <p>{t('home.downloadSubtitle')}</p>
        <div className="store-buttons">
          <a className="store-button play" href="https://play.google.com/store" target="_blank" rel="noreferrer" aria-label={t('home.play.big')}>
            <span>{t('home.play.small')}</span>
            <strong>{t('home.play.big')}</strong>
          </a>
          <a className="store-button appstore" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" aria-label={t('home.appstore.big')}>
            <span>{t('home.appstore.small')}</span>
            <strong>{t('home.appstore.big')}</strong>
          </a>
        </div>
      </section>
    </>
  );
}
