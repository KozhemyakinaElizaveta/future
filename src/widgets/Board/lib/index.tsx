import { useState, useEffect, useMemo, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { getRepos } from 'entities/github/githubApi';
import { AxiosError } from 'axios';

interface Repo {
  id: string;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}

export const useGithubRepos = (defaultUsername: string) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [query, setQuery] = useState(defaultUsername);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const fetchRepos = useCallback(async (username: string, pageNumber: number) => {
    if (loading || lastPage) return;
    setLoading(true);
    try {
      const response = await getRepos({ username, page: pageNumber });
      if (response.data.length === 0) {
        setLastPage(true);
      } else {
        setRepos((prevRepos) => {
          const newRepos = response.data.filter((newRepo: Repo) =>
            !prevRepos.some((existingRepo) => existingRepo.id === newRepo.id)
          );
          return [...prevRepos, ...newRepos];
        });
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data?.message || err.message;
        if (errorMessage !== 'Not Found') {
          setError(errorMessage);
          toast({
            position: 'bottom-right',
            title: 'Ошибка',
            description: errorMessage || 'Не удалось получить репозитории.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        }
      } else {
        const errorMessage = (err as Error).message;
        setError(errorMessage);
        toast({
          position: 'bottom-right',
          title: 'Ошибка',
          description: errorMessage || 'Не удалось получить репозитории.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  }, [loading, lastPage, toast]);

  const searchRepos = useCallback((username: string) => {
    setQuery(username);
    setPage(1);
    setRepos([]);
    setLastPage(false);
    fetchRepos(username, 1);
  }, [fetchRepos]);

  const loadMore = useCallback(() => {
    if (!loading && !lastPage) {
      setPage((prevPage) => prevPage + 1); 
    }
  }, [loading, lastPage]);
  
  useEffect(() => {
    fetchRepos(query, page); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  
  

  const data = useMemo(
    () => ({
      repos,
      loading,
      error,
      searchRepos,
      loadMore,
      lastPage,
    }),
    [repos, loading, error, searchRepos, loadMore, lastPage]
  );

  return data;
};
