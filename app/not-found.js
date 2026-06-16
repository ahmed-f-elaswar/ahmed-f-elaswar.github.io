import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="card reveal not-found">
      <p className="kicker">404</p>
      <h1>Page not found</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="hero-actions">
        <Link className="btn-primary" href="/">
          Back to home
        </Link>
        <Link className="btn-secondary" href="/projects/">
          View projects
        </Link>
      </div>
    </section>
  );
}
