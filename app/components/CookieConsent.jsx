'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

const STORAGE_KEY = 'cookie-consent';
const ACCEPTED = 'accepted';
const DECLINED = 'declined';

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === ACCEPTED || stored === DECLINED) {
        setConsent(stored);
      }
    } catch {}
    setHydrated(true);
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
  };

  const accept = () => persist(ACCEPTED);
  const decline = () => persist(DECLINED);
  const reopen = () => setConsent(null);

  if (!hydrated) return null;

  return (
    <>
      {consent === ACCEPTED && <Analytics />}

      {consent === null && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentement cookies">
          <div className="cookie-banner__content">
            <p className="cookie-banner__text">
              Ce site utilise des outils de mesure d'audience anonymes (Vercel Analytics) pour
              comprendre l'utilisation des pages. Aucune donnée n'est partagée à des fins
              publicitaires. Vous pouvez accepter ou refuser librement.
            </p>
            <div className="cookie-banner__actions">
              <button type="button" className="cookie-banner__btn cookie-banner__btn--ghost" onClick={decline}>
                Refuser
              </button>
              <button type="button" className="cookie-banner__btn cookie-banner__btn--primary" onClick={accept}>
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}

      {consent !== null && (
        <button
          type="button"
          className="cookie-reopen"
          onClick={reopen}
          aria-label="Modifier mes préférences cookies"
          title="Préférences cookies"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="13" r="1" fill="currentColor" />
            <circle cx="13" cy="16" r="1" fill="currentColor" />
            <circle cx="15" cy="11" r="1" fill="currentColor" />
          </svg>
        </button>
      )}
    </>
  );
}
