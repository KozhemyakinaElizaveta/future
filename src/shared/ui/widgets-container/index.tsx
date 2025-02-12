import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface WidgetsContainerProps extends BoxProps {
  children: ReactNode
}

function WidgetsContainer({ children, ...props }: WidgetsContainerProps) {
  return (
    <Box
      w={'100%'}
      h={'100%'}
      rounded={'10px'}
      backgroundColor={'white'}
      {...props}
    >
      {children}
    </Box>
  )
}

export { WidgetsContainer }