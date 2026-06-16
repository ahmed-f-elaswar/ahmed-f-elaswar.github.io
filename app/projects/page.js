import ProjectTimeline from '@/components/ProjectTimeline';
import GitHubRepos from '@/components/GitHubRepos';
import FeaturedProjects from '@/components/FeaturedProjects';

export const metadata = {
  title: 'Projects',
  description:
    'Featured projects, professional experience timeline, and live GitHub activity from Ahmed Farid Elaswar.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="card reveal">
        <h2>Featured Projects</h2>
        <p className="section-intro">
          A curated selection of work I&apos;m most proud of, with the role I played and the tools
          involved.
        </p>
        <FeaturedProjects />
      </section>

      <section className="card reveal delay-1">
        <h2>Experience</h2>
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
