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

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState('');

  return (
    <Container h={'85vh'} my={'16'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'5'} >
        <Heading children="Contact Us" />
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
            <FormLabel htmlFor="message" children={'Your Message'} />
            <Textarea
             
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Comment Your Query"
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Send
          </Button>

          <Box my={'4'}>
           Request for a course? <Link to='/request' >
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

export default Contact;
