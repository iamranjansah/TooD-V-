import React, { useState } from 'react';
import { Container, Input, Heading, VStack, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const param = useParams();

  return (
    <Container py={'16'} h={'85vh'}>
      <form>
        <Heading
          children="Reset Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder='New Possword'
            focusBorderColor="yellow.500"
          
          />

          <Button type="submit" colorScheme="yellow" w={'full'}>
          Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
