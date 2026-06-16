const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ahmed-f-elaswar.github.io';

export default function sitemap() {
  const lastModified = new Date();
  const routes = ['', '/skills/', '/projects/', '/contact/'];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
