import { ReactNode } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

interface ContainerPageProps {
  children: ReactNode
  title?: string
}

export const ContainerPage = ({
  children,
  title,
}: ContainerPageProps) => {
  return (
    <Flex w="100%" height="100%" flexDirection="column">
      <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Flex
            h={title ? '80px' : '30px'}
            pt="30px"
            alignItems="center"
            mb="10px"
            gap="20px"
          >
            <Heading
              fontSize={{ sm: '20px', base: '20px', md: '30px', lg: '40px' }}
              color="blue.800"
            >
              {title}
            </Heading>
          </Flex>
      </Flex>
      {children}
    </Flex>
  )
}
