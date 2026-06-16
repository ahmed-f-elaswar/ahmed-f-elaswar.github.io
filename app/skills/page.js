export const metadata = {
  title: 'Skills',
  description:
    'Programming languages, frameworks, data and ML libraries, and systems Ahmed Farid Elaswar works with.',
  alternates: { canonical: '/skills/' },
};

export default function SkillsPage() {
  return (
    <section className="card reveal">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>Programming</h3>
          <p>
            C++, Python, C#, JavaScript, Visual Basic, RISC-V Assembly, x86 Assembly, Verilog
          </p>
        </div>
        <div>
          <h3>Web and Software</h3>
          <p>Django, React, Next.js, REST APIs, Full-Stack Web Development</p>
        </div>
        <div>
          <h3>Data and ML</h3>
          <p>NumPy, Pandas, SciPy, Scikit-learn, spaCy, NLTK, Gensim, BeautifulSoup</p>
        </div>
        <div>
          <h3>Tools and Systems</h3>
          <p>MySQL, PowerShell, VBA, Batch, Computer Architecture, Hardware and Software Maintenance</p>
        </div>
      </div>
    </section>
  );
}
