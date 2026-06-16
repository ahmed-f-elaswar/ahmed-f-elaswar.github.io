import ProjectTimeline from '@/components/ProjectTimeline';
import GitHubRepos from '@/components/GitHubRepos';
import FeaturedProjects from '@/components/FeaturedProjects';

export const metadata = {
  title: 'Projects',
  description:
    'Featured projects, professional experience timeline, and live GitHub activity from Ahmed Farid.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="card reveal">
        <h2>Featured Projects</h2>
        <p className="section-intro">
          Things I&apos;ve built &mdash; with the context they came out of and the tools involved.
        </p>
        <FeaturedProjects />
      </section>

      <section className="card reveal delay-1">
        <h2>Internships &amp; Experience</h2>
        <p className="section-intro">
          Roles I&apos;ve held in industry, research, and on campus.
        </p>
        <ProjectTimeline />
      </section>

      <section className="card reveal delay-2">
        <h2>GitHub Activity</h2>
        <p className="section-intro">
          Recently updated public repositories, fetched live from the GitHub API.
        </p>
        <GitHubRepos />
      </section>
    </>
  );
}
