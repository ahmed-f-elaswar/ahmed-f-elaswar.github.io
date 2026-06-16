'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf';

export default function Navbar() {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/skills/', label: 'Skills' },
    { href: '/projects/', label: 'Projects' },
    { href: '/contact/', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          <span>Ahmed Farid</span>
          <span className="availability" aria-label="Open to opportunities">
            <span className="availability-dot" aria-hidden="true" />
            Open to opportunities
          </span>
        </Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>
        <ul id="primary-navigation" className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href || pathname === link.href.slice(0, -1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="nav-resume"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
          <li>
            <button
              className="dark-mode-btn"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={darkMode}
            >
              {darkMode ? '\u2600\ufe0f Light' : '\ud83c\udf19 Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
