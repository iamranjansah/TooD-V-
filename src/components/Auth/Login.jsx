import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'90vh'} >
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={"Welcome to Study Sphere"} />

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email Address'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="yellow.500"
              placeholder="iamranjansahh@gmail.com"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'Password'} />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              focusBorderColor="yellow.500"
              placeholder="Enter Your Password"
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password
              </Button>
            </Link>

          </Box>
           
          <Button my={'4'} colorScheme="yellow" type="submit">
              Login
            </Button>

          <Box my={'4'}>
            New user? <Link to='/signup' >
            <Button colorScheme='yellow'
            variant={'link'}
            
            >SignUp</Button> 

            </Link>{" "}here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
