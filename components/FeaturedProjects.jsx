const featured = [
  {
    title: 'NVDA Clipboard History',
    context: 'Open-source NVDA screen reader add-on',
    summary:
      'Ditto-inspired clipboard manager built as an NVDA add-on. Supports text and file clipboard items, event-driven monitoring, search, grouping, multi-select paste, save-to-file, and full i18n (English, Arabic, French, Spanish). Released under GPL-3.0.',
    tech: ['Python', 'NVDA', 'Accessibility', 'i18n', 'GPL-3.0'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ahmed-f-elaswar/clipboardHistory' },
    ],
  },
  {
    title: 'Accessible Dialer',
    context: 'Android app for blind and low-vision users',
    summary:
      'Native Android dialer designed around screen-reader accessibility, with a tactile-friendly keypad layout and large hit targets.',
    tech: ['Kotlin', 'Android', 'Accessibility'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ahmed-f-elaswar/accessible_dialer' },
    ],
  },
  {
    title: 'Math Content Recognition',
    context: 'Senior thesis / research project',
    summary:
      'Pipeline for recognizing mathematical content from images and converting it into a screen-reader-friendly representation. Built around Python ML tooling and Wikipedia-derived training corpora.',
    tech: ['Python', 'Machine Learning', 'OCR', 'Accessibility'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ahmed-f-elaswar/math-content-recognition-' },
    ],
  },
  {
    title: 'Linux Process Manager',
    context: 'Operating systems coursework',
    summary:
      'Terminal-based process manager for Linux written in Rust \u2014 lists, inspects, and signals processes through the /proc filesystem with a fast TUI.',
    tech: ['Rust', 'Linux', '/proc', 'TUI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ahmed-f-elaswar/linux-process-manager' },
    ],
  },
  {
    title: 'RISC-V Simulator',
    context: 'Computer architecture coursework',
    summary:
      'Cycle-accurate simulator for a subset of the RISC-V ISA. Decodes instructions, models the register file and memory, and traces execution for verification against assembly programs.',
    tech: ['Python', 'RISC-V', 'Computer Architecture'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ahmed-f-elaswar/risc-v-simulator' },
    ],
  },
  {
    title: 'Logic Circuits Simulator',
    context: 'Digital design coursework',
    summary:
      'Simulator for combinational and sequential logic circuits with a netlist parser, gate-level evaluation, and waveform-style output for inspection.',
    tech: ['Python', 'Digital Logic', 'Simulation'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ahmed-f-elaswar/Logic-Circuits-Simulator' },
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <div className="featured-grid">
      {featured.map((p) => (
        <article key={p.title} className="featured-card">
          <h3>{p.title}</h3>
          <p className="featured-role">{p.context}</p>
          <p className="featured-summary">{p.summary}</p>
          <ul className="tech-list" aria-label="Technologies used">
            {p.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {p.links.length > 0 && (
            <div className="featured-links">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
