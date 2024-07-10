import React, { useState } from 'react';
import { Container, Input, Heading, VStack, Button } from '@chakra-ui/react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} h={'85vh'}>
      <form>
        <Heading
          children="Forget Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            focusBorderColor="yellow.500"
            placeholder="iamranjansahh@gmail.com"
          />

          <Button type="submit" colorScheme="yellow" w={'full'}>
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
