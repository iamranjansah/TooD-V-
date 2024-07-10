import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.css';
import bg from '../../assets/images/Screenshot__5_-removebg-preview.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4'

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'5'}>
            <Heading
              children="Ranjan's Study Sphere"
              size={'2xl'}
            />
            <Text fontSize={'2xl'} textAlign={["center", 'left']} children="Find premium courses at low cost " />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image className='vector-graphics' src={bg} boxSize={'md'} objectFit={'contain'} />
        </Stack>
      </div>
      <Box padding={'8'} bg={"black"} >
        <Heading
          children="OUR PARTNERS"
          color={'yellow.400'}
          textAlign={'center'}
          fontFamily={'body'}
        />

        <HStack className='brandBanner' justifyContent={"space-evenly"} marginTop="4">
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video 
        autoPlay
        controls
        src={introVideo}
        controlsList='nodownload nofullscreen remoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        muted
        
        ></video>


      </div>
    </section>


  );
};

export default Home;
