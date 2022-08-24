import { Flex, Heading, Input } from '@chakra-ui/react';

export default function Card() {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background='grey.100' p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder='something@email.com'
          variant='filled'
          mb={3}
          type='email'
        />
        <Input placeholder='********' variant='filled' mb={6} type='password' />
      </Flex>
    </Flex>
  );
}
