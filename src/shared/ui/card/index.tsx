import {
  StarRating,
  Text,
} from '..';
import { Flex, Heading } from '@chakra-ui/react';

interface RepCardProps {
  title: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}

export const RepCard = ({
  title,
  description,
  html_url,
  stargazers_count,
  updated_at,
}: RepCardProps) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = String(date.getFullYear()).slice(-2); 
    return `${day}.${month}.${year}`;
  };

  const formattedDate = formatDate(updated_at);

  return (
    <Flex zIndex={0}>
      <Flex
        w={'100%'}
        h={'200px'}
        padding={'10px 10px 10px 20px'}
        flexDir={'row'}
        borderRadius={'10px'}
        textTransform={'uppercase'}
        transition={'0.6s'}
        background={
          'linear-gradient(150deg, var(--chakra-colors-c1, #ebf8ff, #ebf8ff), var(--chakra-colors-c2, rgba(235, 248, 255, 0)) 60%, var(--chakra-colors-c1, #ebf8ff, #ebf8ff)) var(--chakra-colors-x, 0) / 200%'
        }
        _hover={{
          '--chakra-colors-x': '100%',
        }}
        justifyContent="space-between"
      >
        <Flex direction="column" justifyContent="space-around" w={'100%'}>
          <Heading
            fontSize="16px"
            fontWeight={700}
            overflow="hidden"
            maxW="240px"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {title}
          </Heading>
          <Text
            fontSize="14px"
            maxH="65px"
            width="200px"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3, 
            }}
            whiteSpace="normal"
          >
            {description}
          </Text>
          <Flex>
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'blue.600',
                maxWidth: '80%',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Text
                fontSize="12px"
                color="blue.600"
                _hover={{ color: 'blue.700' }}
              >
                {html_url}
              </Text>
            </a>
          </Flex>
          <Flex
            align={'center'}
            justifyContent={'space-between'}
            w={'100%'}
          >
            <StarRating rating={stargazers_count} />
            <Text
              fontSize="12px"
              color="blue.600"
            >
              {formattedDate}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};