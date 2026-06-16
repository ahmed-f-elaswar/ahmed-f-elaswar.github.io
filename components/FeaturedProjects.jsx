const featured = [
  {
    title: 'Tactile Graphical Display for Blind Users',
    context: 'AUC Mechanical Engineering — research project',
    summary:
      'Co-designed a refreshable tactile display that converts on-screen graphics into touch-readable output. Contributed to prototyping, data collection, and usability testing with visually impaired users.',
    tech: ['Accessibility', 'Hardware', 'Usability Research', 'Python'],
    links: [],
  },
  {
    title: 'Voice Assistant Chatbot for Customer Service Agents',
    context: 'Built during e& Egypt internship',
    summary:
      'Built data pipelines over large customer-service call datasets and helped develop a voice assistant that supports service agents in real time. Worked on data cleaning, NLP feature extraction, and model evaluation.',
    tech: ['Python', 'NLP', 'spaCy', 'SQL'],
    links: [],
  },
  {
    title: 'KPI Dashboards & Reporting Automation',
    context: 'Built during Haleon internship',
    summary:
      'Designed Power BI dashboards and Python/VBA automation scripts that replaced manual reporting workflows, cutting recurring report turnaround from hours to minutes.',
    tech: ['Power BI', 'Python', 'Excel VBA'],
    links: [],
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
