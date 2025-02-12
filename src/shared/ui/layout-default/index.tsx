import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const DefaultLayout = ({ children }: { children: ReactNode }) => (
  <Flex
    w="100%"
    h="100%"
    bg="lightblue.100"
    direction="column"
    position="relative"
    justifyContent="center"
    p={'0 30px 30px 30px'}
  >
    {children}
  </Flex>
)
