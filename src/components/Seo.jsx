import { useEffect } from 'react';

const SITE_URL = 'https://clinicadentalaestrada.es';

/**
 * Gestor de <head> por página para esta SPA (sin dependencias).
 * Actualiza title, meta description, canonical y las etiquetas
 * Open Graph / Twitter relevantes en cada cambio de ruta.
 * Google renderiza JS, así que recoge estos metadatos por página.
 */
function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
  }, [title, description, path]);

  return null;
}
