import {
  Container,
  Heading,
  HStack,
  Input,
  Button,
  Text,
  VStack,
  Stack,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']} >
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        children={title}
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
      />

      <Text children={description} noOfLines={'2'} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children="Creator"
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lecture - ${lectureCount}`}
        textTransform={'uppercase'}
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/couses/${id}`}>
        
        <Button colorScheme='yellow' >Watch Now</Button>
        </Link>
        <Button 
        variant={'ghost'}
        onClick={()=>addToPlaylistHandler(id)}
        colorScheme='yellow' >Add to Playlist </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = ()=>{
    console.log("added to playlist");
  }

  const categories = [
    'Web Development',
    'Back-end Development',
    'Full Stack Web Development',
    'Android Development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'Machine Learning',
  ];
  return (
    <Container minH={'90vh'} maxW="container.lg" paddingY={'10'} >
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search for Couses...."
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack overflowX={'auto'} paddingTop={'8'} paddingBottom={'4'}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Demo'}
          description={'Description'}
          views={2}
          imageSrc={'https://www.iamranjansah.me/static/media/coming%20soon.9a89d4777370090a6212.png'}
          id={2}
          creator={'creator'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
          
        />
      </Stack>
    </Container>
  );
};

export default Courses;
