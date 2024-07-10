import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/termsAndConditions'

const TandC = ({termsAndConditions}) => {
  return (
    <Box >
      <Heading
        size={'md'}
        children="Term & Conditions"
        textAlign={['center', 'left']}
        my={'4'}
      />

      <Box h={'sm'} p={'4'} overflowY={'scroll'}>
        <Text fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
        
        >
            {termsAndConditions}


        </Text>
        <Heading 
        my={'4'}
        size={'xs'}
        children="Refund only available for cancellatioin within 7 days."
        />


      </Box>
    </Box>
  );
};

const VideoPlayer = () => {
  return (
    <video
      autoPlay
      loop
      controls
      src={introVideo}
      controlsList="nodownload nofullscreen remoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      muted
    ></video>
  );
};

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', 16]} padding={'8'}>
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/u/93971032?s=400&u=625fc95d5c48b1b07f35b93e2295fd744bf71a59&v=4"
          boxSize={['40', '48']}
        />
        <Text children="Co-Founder" opacity={'0.7'} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={['Center', 'flex-start']}>
        <Heading children="Ranjan Kumar" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children="Hi, I am a full-stack developer and a tuitor. Our
        Mission is provide to quality content at low cost"
        />
      </VStack>
    </Stack>
  );
};

const About = () => {
  return (
    <Container mt={'4'} maxW={'container.lg'} padding={'16'} boxShadow={'xl'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />

      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for primium user.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions}  />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
