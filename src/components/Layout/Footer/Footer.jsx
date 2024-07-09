import React from 'react';
import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'black'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@iamranjansah"
            color={'yellow'}
            fontFamily={'body'}
            size={'sm'}
          />
        </VStack>
        <HStack spacing={['2', '10']} justifyContent={'center'}
        color={'white'}
        fontSize={'50'}
        >
          <a href="https://www.linkedin.com/in/iamranjansah" target="_blank">
         
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://www.github.com/iamranjansah" target="_blank">
            <TiSocialGithubCircular />
          </a>
          <a href="https://twitter.com/iamranjansah" target="_blank">
            <TiSocialTwitterCircular />
          </a>
          <a href="http://instagram.com/iamranjansah" target="_blank">
            <TiSocialInstagramCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
