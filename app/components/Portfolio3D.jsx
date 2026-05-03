'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '../data';
import { getLenisInstance } from '../lib/lenis';
import {
  IconDownload,
  IconGithub,
  IconLinkedIn,
  IconMail,
  IconTiktok,
  IconUp,
  IconWhatsapp,
  IconYoutube,
  ServiceIcon,
} from './Icons';
import AvatarCluster from './AvatarCluster';
import BlurStagger from './BlurStagger';
import ProjectCarousel from './ProjectCarousel';
import SkillRadarEffect from './SkillRadarEffect';

export default function Portfolio3D() {
  const [lang, setLang] = useState('fr');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const target = document.querySelector('.v3-trust');
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(entry.boundingClientRect.bottom <= 0),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const t = PORTFOLIO_DATA[lang];
  const skills = PORTFOLIO_DATA.skills;
  const logos = PORTFOLIO_DATA.trustLogos;
  const serviceKinds = PORTFOLIO_DATA.serviceKinds;

  const scrollToTop = () => {
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="v3">
      <div className="v3-bg" aria-hidden="true">
        <div className="v3-orb a" />
        <div className="v3-orb b" />
        <div className="v3-orb c" />
      </div>
      <div className="v3-grid" aria-hidden="true" />
      <header className="v3-header">
        <nav className="v3-nav" aria-label="Primary">
          <span className="v3-nav-logo">
            <span className="v3-nav-logo-dot" />
            Sébastien Chapuy
          </span>
          <a className="v3-nav-link active" href="#home">{t.nav.home}</a>
          <a className="v3-nav-link" href="#projects">{t.nav.work}</a>
          <a className="v3-nav-link" href="#services">{t.nav.services}</a>
          <a className="v3-nav-link" href="#contact">{t.nav.contact}</a>
          <a className="v3-nav-cta" href="#contact">{t.nav.talk}</a>
        </nav>
      </header>
      <button
        type="button"
        className="v3-lang-toggle"
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
      >
        {lang.toUpperCase()}
      </button>
      <button
        type="button"
        className="v3-burger"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="v3-mobile-menu"
        aria-label={
          menuOpen
            ? lang === 'fr' ? 'Fermer le menu' : 'Close menu'
            : lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'
        }
      >
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path className="v3-burger-line top" d="M4 12L20 12" />
          <path className="v3-burger-line mid" d="M4 12H20" />
          <path className="v3-burger-line bot" d="M4 12H20" />
        </svg>
      </button>
      <div
        id="v3-mobile-menu"
        className={`v3-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <a href="#home" onClick={closeMenu}>{t.nav.home}</a>
          <a href="#projects" onClick={closeMenu}>{t.nav.work}</a>
          <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
          <a href="#contact" className="v3-mobile-menu-cta" onClick={closeMenu}>{t.nav.talk}</a>
        </nav>
        <button
          type="button"
          className="v3-mobile-menu-lang"
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        >
          {lang === 'fr' ? 'EN — English' : 'FR — Français'}
        </button>
      </div>
      <div className="v3-content">
        <section id="home" className="v3-hero">
          <div className="v3-hero-aurora" aria-hidden="true" />
          <div className="v3-hero-portrait-wrap">
            <div className="v3-hero-portrait">
              <Image
                src="/seb.jpg"
                alt={t.name}
                width={280}
                height={280}
                priority
                sizes="(min-width: 1024px) 280px, 240px"
              />
            </div>
          </div>
          <h1 className="v3-hero-title">
            <BlurStagger
              key={`t1-${lang}`}
              text={t.title[0]}
              className="grad"
              block
              delay={0.1}
              duration={0.7}
            />
            <br />
            <BlurStagger
              key={`t2-${lang}`}
              text={t.titleIt}
              className="it grad"
              block
              delay={0.45}
              duration={0.7}
            />
          </h1>
          <p className="v3-hero-sub">
            <BlurStagger
              key={`sub-${lang}`}
              text={t.sub}
              delay={1.0}
              perChar={0.008}
              duration={0.35}
            />
          </p>
          <div className="v3-hero-meta">
            {t.metrics.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
          <div className="v3-hero-ctas">
            <a className="v3-btn v3-btn-primary" href="#contact">
              <IconMail />
              {t.cta1}
            </a>
            <a className="v3-btn v3-btn-glass" href="/cv.pdf" download>
              <IconDownload />
              {t.cta2}
            </a>
          </div>
          <div className="v3-hero-socials">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener"><IconLinkedIn /></a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer noopener"><IconGithub /></a>
            <a href="https://www.tiktok.com" aria-label="TikTok" target="_blank" rel="noreferrer noopener"><IconTiktok /></a>
            <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer noopener"><IconYoutube /></a>
          </div>
        </section>

        <section className="v1-avatars">
          <AvatarCluster cluster={t.reviewsCluster} variant="dark" />
        </section>

        <section className="v3-trust" aria-label={t.trustLabel}>
          <div className="v3-trust-label">◆ {t.trustLabel} ◆</div>
          <div className="v3-trust-track">
            {[...logos, ...logos].map((l, i) => {
              const variant = i % 3 === 0 ? '' : i % 3 === 1 ? 'bold' : 'mono';
              return (
                <span key={i} className={`v3-trust-logo ${variant}`}>
                  {l}
                </span>
              );
            })}
          </div>
        </section>

        <section id="services" className="v3-section">
          <div className="v3-section-head">
            <div>
              <div className="v3-section-tag">{t.services.tag}</div>
              <h2 className="v3-section-title">
                <span className="grad">{t.services.title[0]}</span>{' '}
                <span className="it">{t.services.titleIt}</span>
              </h2>
            </div>
            <p className="v3-section-sub">{t.services.sub}</p>
          </div>
          <div className="v3-services">
            {t.services.items.map((s, i) => (
              <article className="v3-service" key={i}>
                <div className="v3-service-icon3d">
                  <ServiceIcon kind={serviceKinds[i]} size={32} />
                </div>
                <div className="v3-service-num">{s.num} / 05</div>
                <h3 className="v3-service-title">{s.title}</h3>
                <p className="v3-service-text">{s.text}</p>
                <div className="v3-service-tags">
                  {s.tags.map((tg, j) => (
                    <span className="v3-tag" key={j}>{tg}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="v3-section">
          <div className="v3-section-head--center">
            <div className="v3-section-tag">{t.projects.tag}</div>
            <h2 className="v3-section-title">
              <span className="grad">{t.projects.title[0]}</span>{' '}
              <span className="it">{t.projects.titleIt}</span>
            </h2>
            <p className="v3-section-sub">{t.projects.sub}</p>
          </div>
          <ProjectCarousel
            items={t.projects.items}
            visualLabel={t.projectVisual}
            prevLabel={lang === 'fr' ? 'Projet précédent' : 'Previous project'}
            nextLabel={lang === 'fr' ? 'Projet suivant' : 'Next project'}
          />
        </section>

        <section className="v3-section">
          <div className="v3-section-head">
            <div>
              <div className="v3-section-tag">{t.experience.tag}</div>
              <h2 className="v3-section-title">
                <span className="grad">{t.experience.title[0]}</span>
                <span className="it">{t.experience.titleIt}</span>
              </h2>
            </div>
            <p className="v3-section-sub">{t.experience.sub}</p>
          </div>
          <div className="v3-exp-list">
            {t.experience.items.map((e, i) => (
              <article className="v3-exp" key={i}>
                <div className="v3-exp-date">{e.date}</div>
                <div>
                  <h3 className="v3-exp-role">{e.role}</h3>
                  <div className="v3-exp-co">{e.co}</div>
                  <p className="v3-exp-desc">{e.desc}</p>
                </div>
                <div className="v3-exp-date v3-exp-details">◆ {t.experience.detailsLabel}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="v3-section">
          <div className="v3-section-head">
            <div>
              <div className="v3-section-tag">{t.skills.tag}</div>
              <h2 className="v3-section-title">
                <span className="grad">{t.skills.title[0]}</span>{' '}
                <span className="it">{t.skills.titleIt}</span>
              </h2>
            </div>
            <p className="v3-section-sub">{t.skills.sub}</p>
          </div>
          <SkillRadarEffect skills={skills} />
        </section>

        <div id="contact" className="v3-cta">
          <div className="v3-cta-content">
            <div className="v3-cta-tag">◆ {t.cta.tag}</div>
            <h2 className="v3-cta-title">
              {t.cta.title[0]}
              <span className="it">{t.cta.titleIt}</span>
            </h2>
            <p className="v3-cta-sub">{t.cta.sub}</p>
            <a className="v3-btn v3-btn-primary" href="/cv.pdf" download>
              <IconDownload />
              {t.cta.btn}
            </a>
          </div>
        </div>

        <footer className="v3-footer">
          <h2 className="v3-footer-name">
            SÉBASTIEN
            <br />
            CHAPUY
          </h2>
          <div className="v3-footer-grid">
            {t.footer.cols.map((c, i) => (
              <div className="v3-footer-col" key={i}>
                <h4>{c.title}</h4>
                {c.links.map((l, j) => (
                  <a key={j} href="#">{l}</a>
                ))}
              </div>
            ))}
          </div>
          <div className="v3-footer-bottom">
            {t.footer.legal.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </footer>

        <div className="v3-fab-wrap">
          <a
            className="v3-fab chat"
            href="https://wa.me/33000000000"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconWhatsapp />
          </a>
          <button
            type="button"
            className={`v3-fab v3-fab-up ${showBackToTop ? 'visible' : ''}`}
            aria-label={lang === 'fr' ? 'Remonter en haut' : 'Back to top'}
            aria-hidden={!showBackToTop}
            tabIndex={showBackToTop ? 0 : -1}
            onClick={scrollToTop}
          >
            <IconUp />
          </button>
        </div>
      </div>
    </div>
  );
}
