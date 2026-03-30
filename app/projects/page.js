import ProjectTimeline from '@/components/ProjectTimeline';
import GitHubRepos from '@/components/GitHubRepos';

export const metadata = {
  title: 'Projects | Ahmed Farid Elaswar',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="card reveal">
        <h2>GitHub Repositories</h2>
        <p className="section-intro">
          My public repositories fetched live from the GitHub API.
        </p>
        <GitHubRepos />
      </section>

      <section className="card reveal delay-1">
        <h2>Experience</h2>
        <ProjectTimeline />
      </section>
    </>
  );
}
