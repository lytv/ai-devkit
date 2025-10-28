'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GitHubContextType {
  stars: number | null;
  loading: boolean;
}

const GitHubContext = createContext<GitHubContextType>({
  stars: null,
  loading: true,
});

export function GitHubProvider({ 
  children, 
  repo 
}: { 
  children: ReactNode; 
  repo: string;
}) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStars();
  }, [repo]);

  return (
    <GitHubContext.Provider value={{ stars, loading }}>
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHubStars() {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error('useGitHubStars must be used within a GitHubProvider');
  }
  return context;
}

