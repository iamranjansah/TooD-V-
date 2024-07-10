import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'yellow'} p={'4 '} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text
            color={'black'}
            fontWeight={'bold'}
            textAlign={'center'}
            children={`Pro Pack - ₹6000.00/-`}
          />
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text children="Join Pro pack and get access to all content ." />

            <Heading size={'md'} children="₹6000 Only" />
          </VStack>

          <Button my={'8'} w={'full'} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box
          p={'4 '}
          css={{
            borderRadius: '0 0 8px 8px',
            backgroundColor: 'RGBA(0, 0, 0, 0.48)',
          }}
        >
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children="100% Refund at cancellation"
          />
          <Text
            fontSize={'xs'}
            color={'white'}
            children="*Terms & Conditions Apply"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
