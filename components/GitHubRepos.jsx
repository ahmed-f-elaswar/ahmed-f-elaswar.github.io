'use client';

import { useState, useEffect } from 'react';

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          'https://api.github.com/users/ahmed-f-elaswar/repos?sort=updated&per_page=10'
        );
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="api-status">
        <div className="loading-spinner" />
        <p>Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-status error">
        <p>Failed to load repositories: {error}</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="api-status">
        <p>No public repositories found.</p>
      </div>
    );
  }

  return (
    <div className="repos-grid">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card"
        >
          <h3>{repo.name}</h3>
          <p className="repo-desc">
            {repo.description || 'No description available'}
          </p>
          <div className="repo-meta">
            {repo.language && <span className="repo-lang">{repo.language}</span>}
            <span className="repo-stars">⭐ {repo.stargazers_count}</span>
            {repo.forks_count > 0 && (
              <span className="repo-forks">🍴 {repo.forks_count}</span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
