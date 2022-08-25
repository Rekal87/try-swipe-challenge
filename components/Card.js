import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useGetCards } from '..hooks/useGetCards';

export default function Card() {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background='gray.200' p={12} rounded={6}>
        <Heading mb={6}>This is a card</Heading>
        <Text>No text atm</Text>
        <Button colorScheme='teal'>Test</Button>
      </Flex>
    </Flex>
  );
}
