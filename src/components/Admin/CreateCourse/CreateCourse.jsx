import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreateBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'Web Development',
    'Back-end Development',
    'Full Stack Web Development',
    'Android Development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'Machine Learning',
  ];

const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: 'purple',
    backgroundColor: 'white',
  };
  
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file); 
    };
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default !important`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create Courses"
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              focusBorderColor="Purple.300"
              placeholder="Title"
            />

            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              type="text"
              focusBorderColor="Purple.300"
              placeholder="Description"
            />

            <Input
              value={createdBy}
              onChange={e => setCreateBy(e.target.value)}
              type="text"
              focusBorderColor="Purple.300"
              placeholder="Creator Name"
            />

            <Select
              value={category}
              onChange={e => setCategory(e.target.value)}
              focusBorderColor="Purple.300"
            >
              <option value="" >Category</option>
              {
                categories.map((item, index)=>(
                  <option key={index} value={item} >{item}</option>

                ))
              }
            </Select>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="Purple.300"
              css={{'&::file-selector-button': fileUploadCss,}}
              onChange={changeImageHandler}
            />
            {
              imagePrev && (
                <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />

              )
            }

            <Button w={'full'} colorScheme='purple' type='submit' >
              Create 
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
