import React, { useState } from 'react';
import {
  Container,
  VStack,
  Heading,
  Box,
  FormLabel,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(' ');
  const [course, setCourse] = useState('');

  return (
    <Container h={'85vh'} my={'16'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'5'} >
        <Heading children="Request New Course" />
        <form style={{ width: '100%' }}>

        <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Ranjan Kumar"
            />
          </Box>
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
            <FormLabel htmlFor="course" children={'Course'} />
            <Textarea
             
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Explain the course"
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Send
          </Button>

          <Box my={'4'}>
           See available courses! <Link to='/courses' >
            <Button colorScheme='yellow'
            variant={'link'}
            
            >Click</Button> 

            </Link>{" "}here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request