'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Microsoft Intern - Microsoft Egypt',
    date: 'Oct 2025 - Present',
    details:
      'Participating in software development and cloud ecosystem training projects. Working with Azure services, .NET development, and enterprise-level software engineering practices.',
  },
  {
    title: 'Research Assistant - AUC Mechanical Engineering',
    date: 'Sep 2024 - Present',
    details:
      'Contributing to the design of a tactile graphical display for blind users and supporting accessibility research workflows. Involved in prototyping, data collection, and usability testing.',
  },
  {
    title: 'Peer Tutor - Office of the Associate Provost for Innovative Learning Experiences',
    date: '2024 - Present',
    details:
      'Providing tutoring support in computer science and helping students with programming and problem-solving skills. Conducting one-on-one and group sessions for introductory and advanced CS courses.',
  },
  {
    title: 'Student Intern - Office of Institutional Equity (OIE)',
    date: '2024 - Present',
    details:
      'Supported institutional accessibility and inclusion initiatives, including research and policy documentation. Assisted in creating accessible content guidelines.',
  },
  {
    title: 'Database and Machine Learning Intern - e& Egypt',
    date: 'Feb 2025 - Jun 2025',
    details:
      'Worked with large customer service datasets and helped develop a voice assistant chatbot for service agents. Used Python, NLP libraries, and SQL for data processing and model training.',
  },
  {
    title: 'Data Analytics Intern - Haleon',
    date: 'Jul 2025 - Aug 2025',
    details:
      'Built KPI dashboards and automation scripts for reporting and data processing. Utilized Power BI, Python, and Excel VBA for business intelligence solutions.',
  },
  {
    title: 'Dell Summer Academy and Dell Empower Abilities Intern - Dell Technologies',
    date: '2024',
    details:
      'Completed technical training and projects through accessibility-focused internship programs. Gained hands-on experience with hardware maintenance and enterprise IT solutions.',
  },
  {
    title: 'Campus Leadership Roles - AUC',
    date: '2022 - 2024',
    details:
      'Served as Admin Assistant (CSW), Accessibility Adviser (CLT), and First Year Experience Peer Leader (OSL). Contributed to student welfare, accessibility initiatives, and freshman orientation programs.',
  },
];

export default function ProjectTimeline() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleDetails(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="timeline">
      {projects.map((project, i) => (
        <article key={i}>
          <h3>{project.title}</h3>
          <p className="meta">{project.date}</p>
          <button className="details-btn" onClick={() => toggleDetails(i)}>
            {openIndex === i ? 'Hide Details' : 'Show Details'}
          </button>
          {openIndex === i && (
            <div className="project-details">
              <p>{project.details}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
