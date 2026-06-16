export default function HomePage() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || '/cv.pdf';
  return (
    <>
      <header className="hero card reveal">
        <img
          src="/images/profile.jpeg"
          alt="Profile avatar of Ahmed Farid"
          className="profile-image"
          width={132}
          height={132}
        />
        <div>
          <p className="kicker">Personal Portfolio</p>
          <h1>Ahmed Farid</h1>
          <p className="title">
            Computer Science Graduate | Accessibility, Data, and AI Enthusiast
          </p>
          <p className="bio">
            Computer Science graduate from the American University in Cairo (AUC), USAID and
            Change Leaders scholar, and currently a software engineering intern at Microsoft Egypt.
            I work at the intersection of accessibility, data, and machine learning.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            <a className="btn-secondary" href="/projects/">
              View Projects
            </a>
          </div>
        </div>
      </header>

      <section className="card reveal delay-1">
        <h2>Profile</h2>
        <p>
          I represented the USAID Scholars Program at COP27 and in front of a U.S. Congressional
          delegation and the U.S. Ambassador to Egypt. After the program&apos;s suspension, I served
          as a student representative coordinating between the student body and university
          administration.
        </p>
        <p>
          On the competitive side, I placed third in the Egyptian Collegiate Programming Contest
          (ECPC) at AUC during my freshman year, and was selected by the Ministry of Youth for the
          Global Information Technology Challenge (GITC) in Abu Dhabi (2023) and the Philippines
          (2024).
        </p>
        <p>
          I&apos;ve held a range of roles on campus &mdash; Accessibility Adviser at the Center for
          Learning and Teaching, Peer Tutor for the Office of the Associate Provost for Innovative
          Learning Experiences, FYE Peer Leader, Student Intern at the Office of Institutional
          Equity, and Research Assistant in Mechanical Engineering working on a tactile graphical
          display for blind users.
        </p>
        <p>
          My focus areas are competitive programming, data analysis, and machine learning. Past
          industry experience includes internships at Microsoft, e&amp; Egypt, Haleon, and Dell
          Technologies (Summer Academy &amp; Empower Abilities).
        </p>
      </section>

      <section className="card reveal delay-2">
        <h2>Education</h2>
        <article>
          <h3>The American University in Cairo (AUC)</h3>
          <p className="meta">
            Bachelor of Science in Computer Science, Minor in Mathematics | 2022 &ndash; 2026
          </p>
          <p>GPA: 3.45 / 4.0, USAID Scholar &middot; Graduated June 2026</p>
        </article>
      </section>

      <section className="card reveal delay-3">
        <h2>Certifications and Achievements</h2>
        <ul className="clean-list">
          <li>Third Place &ndash; Egyptian Collegiate Programming Contest (ECPC), AUC</li>
          <li>
            Selected Participant &ndash; Global Information Technology Challenge (GITC), Abu Dhabi
          </li>
          <li>Selected for the second round of GITC in the Philippines</li>
          <li>USAID Scholarship Recipient &ndash; The American University in Cairo</li>
          <li>USAID Scholars Program Representative at COP27</li>
          <li>
            Student representative coordinating between students and university administration
          </li>
        </ul>
      </section>
    </>
  );
}
