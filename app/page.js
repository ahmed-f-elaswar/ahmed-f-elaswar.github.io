export default function HomePage() {
  return (
    <>
      <header className="hero card reveal">
        <img
          src="/images/profile.jpeg"
          alt="Profile avatar of Ahmed Farid Elaswar"
          className="profile-image"
          width={132}
          height={132}
        />
        <div>
          <p className="kicker">Personal Portfolio</p>
          <h1>Ahmed Farid Elaswar</h1>
          <p className="title">
            Senior Computer Science Student | Accessibility, Data, and AI Enthusiast
          </p>
          <p className="bio">
            Ahmed Farid is a Senior Computer Science student at The American University in Cairo
            (AUC). He was awarded a scholarship from the U.S. Agency for International Development
            (USAID) to pursue his bachelor&apos;s degree and is currently a scholar in the Change
            Leaders Scholarship Program.
          </p>
        </div>
      </header>

      <section className="card reveal delay-1">
        <h2>Profile</h2>
        <p>
          Ahmed Farid is a Senior Computer Science student. He was awarded a scholarship from the
          U.S. Agency for International Development (USAID) to pursue his bachelor&apos;s degree at
          The American University in Cairo (AUC). Ahmed represented the USAID Scholars Program at
          the COP27 conference. He also represented the program in front of a delegation from the
          American Congress and the U.S. Ambassador to Egypt. Following the suspension of the USAID
          Scholars Program, Ahmed has continued to play a critical role as a student representative,
          coordinating between the student body and the university administration.
        </p>
        <p>
          Ahmed is currently a scholar in the Change Leaders Scholarship Program and is presently an
          intern at Microsoft Egypt.
        </p>
        <p>
          During his freshman year, Ahmed placed third in the Egyptian Collegiate Programming
          Competition (ECPC) at AUC. In 2023, he was selected by the Ministry of Youth to
          participate in the Global Information Technology Challenge (GITC) in Abu Dhabi, and the
          following year, he was selected again to join the second round of the competition in the
          Philippines.
        </p>
        <p>
          Ahmed has held several roles on campus, including Admin Assistant at the Center for Student
          Wellbeing (CSW), Accessibility Adviser at the Center for Learning and Teaching (CLT), and
          First Year Experience (FYE) Peer Leader at the Office of Student Life (OSL). He is
          currently serving as a Peer Tutor at the Office of the Associate Provost for Innovative
          Learning Experiences. He previously worked as a student intern at the Office of
          Institutional Equity (OIE) and as a Research Assistant at the Department of Mechanical
          Engineering.
        </p>
        <p>
          With a strong interest in mathematics-related fields such as competitive programming, data
          analysis, and statistics, Ahmed aims to pursue a career in machine learning. He has also
          gained professional experience through several internships, including the Dell Summer
          Academy and Empower Abilities internship programs at Dell Technologies, a five-month
          internship at e&amp; Egypt, and a two-month internship at Haleon.
        </p>
      </section>

      <section className="card reveal delay-2">
        <h2>Education</h2>
        <article>
          <h3>The American University in Cairo (AUC)</h3>
          <p className="meta">
            Bachelor of Science in Computer Science, Minor in Mathematics | 2022 &ndash; 2026
          </p>
          <p>GPA: 3.55 / 4.0, USAID Scholar</p>
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
