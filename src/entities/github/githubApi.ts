import axios from "shared/api/axios";

export interface Repo {
    id: string
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}

export function getRepos({
    username,
    page,
  }: {
    username: string;
    page?: number;
  }) {
    const token = import.meta.env.VITE_GITHUB_TOKEN;

  
    return axios.get<Repo[]>(
      `https://api.github.com/users/${username}/repos?per_page=20&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
}