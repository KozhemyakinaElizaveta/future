import {
  RepCard,
  WidgetsContainer,
  Text,
  Loading,
  Input,
} from 'shared/ui';
import { useEffect, useRef } from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { useGithubRepos } from '../lib';
import { NoReps } from 'shared/iconpack/NoReps';
import { Search } from 'shared/iconpack/Search';
import { observer } from 'mobx-react-lite';
import { debounce } from 'lodash';
import { searchStore } from 'entities/github/model/SearchStore';

export const Board = observer(() => {
  const { repos, loading, loadMore, lastPage, searchRepos } = useGithubRepos(searchStore.search);
  const listRef = useRef<HTMLDivElement>(null);
  const lastElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !lastPage && !loading) {
        loadMore();
      }
    });

    const currentLastElement = lastElementRef.current;
    if (currentLastElement) {
      observer.observe(currentLastElement);
    }

    return () => {
      if (currentLastElement) {
        observer.unobserve(currentLastElement);
      }
    };
  }, [loadMore, lastPage, loading]);

  const debouncedSearch = debounce((value: string) => {
    searchStore.setSearch(value);
    searchRepos(value);
  }, 500);

  return (
    <WidgetsContainer
      p="34px 27px"
      w="100%"
      display={repos.length === 0 ? 'flex' : 'block'}
      borderRadius="10px"
      flexDir="column"
      overflowY="scroll"
    >
      <Flex h="30px" alignItems="center" py="15px" pb="40px">
        <Input
          widthIcon="20px"
          heightIcon="20px"
          placeholder="Введите имя пользователя"
          w="320px"
          Icon={Search}
          value={searchStore.search}
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </Flex>
      {!loading && repos.length === 0 && (
        <Flex h="100%" flexDir="column" justify="center" align="center" gap="24px" pt="35px">
          <NoReps />
          <Text textAlign="center" fontSize="20px" fontWeight={600}>
            Репозиториев не найдено!
          </Text>
        </Flex>
      )}
      {repos.length > 0 && (
        <Box h="100%" overflowY="scroll" ref={listRef}>
          <Grid templateColumns="repeat(auto-fill, minmax(324px, 1fr))" gridGap="20px">
            {repos.map((el, index) => (
              <Box key={el.id} w="minmax(324px, 1fr)">
                <RepCard
                  title={el.name}
                  description={el.description}
                  html_url={el.html_url}
                  stargazers_count={el.stargazers_count}
                  updated_at={el.updated_at}
                />
                {index === repos.length - 1 && <div ref={lastElementRef} />}
              </Box>
            ))}
          </Grid>
          {loading && <Loading />}
        </Box>
      )}
    </WidgetsContainer>
  );
});
