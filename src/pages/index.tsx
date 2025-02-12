import { Flex } from '@chakra-ui/react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Text } from 'shared/ui'
import { DefaultLayout } from '../shared/ui'

const HomePage = lazy(() => import('./home'))

export default function Routing() {
  return (
    <DefaultLayout>
        <Routes>
          <Route
            path={'/future/'}
            element={
              <HomePage />
            }
          />
          <Route
            path={'/future/*'}
            element={
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                alignItems="center"
              >
                <Text>404 page</Text>
              </Flex>
            }
          />
        </Routes>
    </DefaultLayout>
  )
}