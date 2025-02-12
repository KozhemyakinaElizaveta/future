import { Center, Spinner } from "@chakra-ui/react"

export const Loading = () => {
  return (
    <Center w="100%" h="100%">
      <Spinner w="50px" h="50px" color="lightblue.300" />
    </Center>
  )
}
